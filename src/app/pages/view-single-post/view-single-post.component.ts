import { Component } from '@angular/core';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { SurveyFormsComponent } from '../../shared/survey-forms/survey-forms.component';

@Component({
  selector: 'app-view-single-post',
  standalone: true,
  imports: [ShareButtons, CommonModule,SurveyFormsComponent],
  templateUrl: './view-single-post.component.html',
  styleUrl: './view-single-post.component.css'
})
export class ViewSinglePostComponent {

  blogsData:any
  fullUrl:any

  constructor(private route: ActivatedRoute, private http:HttpClient,@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const metaHeading = params.get('id');
    this.getSingleBlogbyMetaHeading(metaHeading);

    if (isPlatformBrowser(this.platformId)) {
      this.fullUrl = window.location.href;
      console.log('Full URL:', this.fullUrl);
    }
  });
  }


  getSingleBlogbyMetaHeading(metaHeading:any){
    this.http.get(`${environment.serverUrl}/connected/getBlogByMetaHeading/${metaHeading}`).subscribe((res:any)=>{
      this.blogsData = res?.message

      console.log(this.blogsData, "blogsData")

    })
  }

}
