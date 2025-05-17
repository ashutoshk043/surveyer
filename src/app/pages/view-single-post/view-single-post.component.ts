import { Component } from '@angular/core';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule ,Location} from '@angular/common';

@Component({
  selector: 'app-view-single-post',
  standalone: true,
  imports: [ShareButtons, CommonModule],
  templateUrl: './view-single-post.component.html',
  styleUrl: './view-single-post.component.css'
})
export class ViewSinglePostComponent {

  blogsData:any
  fullUrl:any

  constructor(private route: ActivatedRoute, private http:HttpClient,private location: Location) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const metaHeading = params.get('id');  // or the param name in your route
      this.fullUrl = window.location.href;
      this.getSingleBlogbyMetaHeading(metaHeading)
    });
  }


  getSingleBlogbyMetaHeading(metaHeading:any){
    this.http.get(`${environment.serverUrl}/connected/getBlogByMetaHeading/${metaHeading}`).subscribe((res:any)=>{
      this.blogsData = res?.message
    })
  }

}
