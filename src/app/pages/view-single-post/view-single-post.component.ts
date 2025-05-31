import { Component, OnInit } from '@angular/core';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { sanitizeInputObject } from '../../../sanitize.util';
import { MetaService } from '../../services/metadata.service';

@Component({
  selector: 'app-view-single-post',
  standalone: true,
  imports: [ShareButtons, CommonModule, ReactiveFormsModule],
  templateUrl: './view-single-post.component.html',
  styleUrls: ['./view-single-post.component.css']
})
export class ViewSinglePostComponent implements OnInit {

  blogsData: any
  fullUrl: any
  commentForm!: FormGroup
  metaHeading: any
  commentsPerPage = 5;
  currentPage = 1;
  paginatedComments: any[] = [];
  totalPages = 1;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private fb: FormBuilder,
    private toster: ToastrService,
    private router: Router,
    private metaService: MetaService

  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.metaHeading = params.get('id');
      this.getSingleBlogbyMetaHeading(this.metaHeading);

      if (isPlatformBrowser(this.platformId)) {
        // this.fullUrl = window.location.href;
       this.fullUrl  = decodeURIComponent(window.location.href);
        console.log('Full URL:', this.fullUrl);
      }
    });

    this.createCommentForm()


  }


  createCommentForm() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  getSingleBlogbyMetaHeading(metaHeading: any) {
    this.http.get(`${environment.serverUrl}/connected/getBlogByMetaHeading/${metaHeading}`).subscribe({
      next: (res: any) => {
        if (res.status === true) {
          this.blogsData = res.message;
          this.metaService.updateMetaTags({
            title: this.blogsData?.metaheading,
            description: this.blogsData?.keywords_description,
            image: this.blogsData?.thumbnail,
            url: this.fullUrl,
            keywords:this.blogsData?.keywords
          })
          this.setupPagination();
        } else {
          this.toster.error(res.message || 'Blog Does Not Exist!');
          // Wait 2 seconds before redirecting so user sees the message
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }
      },
      error: (err) => {
        this.toster.error('Something went wrong, please try again.');
        this.router.navigate(['/']);
      }
    });
  }


  onSubmit(blogData: any) {
    if (this.commentForm.valid) {
      const data = {
        blog_id: blogData._id,
        ...this.commentForm.value
      };

      const sanitizedData = sanitizeInputObject(data);

      console.log(JSON.stringify(sanitizedData), "Sanitized");

      this.http.post(`${environment.serverUrl}/connected/addCommentToBlog`, sanitizedData).subscribe((res: any) => {
        if (res.status === true) {
          this.toster.success("Comment Added Successfully");
          this.commentForm.reset();
          this.getSingleBlogbyMetaHeading(this.metaHeading);
        } else {
          this.toster.error("Some Error Occurred");
        }
      });
    }
  }



  ngOnChanges() {
    if (this.blogsData?.comments) {
      this.setupPagination();
    }
  }

  setupPagination() {
    const allComments = this.blogsData.comments || [];
    this.totalPages = Math.ceil(allComments.length / this.commentsPerPage);
    const start = (this.currentPage - 1) * this.commentsPerPage;
    const end = start + this.commentsPerPage;
    this.paginatedComments = allComments.slice(start, end);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setupPagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.setupPagination();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.setupPagination();
  }

}
