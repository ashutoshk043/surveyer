import { Component } from '@angular/core';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { SocialStyleDirective } from '../../directives/social-style.directive';
@Component({
  selector: 'app-view-single-post',
  imports: [ShareButtons, SocialStyleDirective],
  templateUrl: './view-single-post.component.html',
  styleUrl: './view-single-post.component.css'
})
export class ViewSinglePostComponent {

}
