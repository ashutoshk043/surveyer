import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { HomeComponent } from './features/home/home/home.component';
import { ViewSinglePostComponent } from './pages/view-single-post/view-single-post.component';

export const routes: Routes  = [
    {path:'', component:HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'survey/:id', component: ViewSinglePostComponent,data: {
      getPrerenderParams: () => [
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ]
    } },
    { path: '**', redirectTo: 'about' } // fallback
  ];
