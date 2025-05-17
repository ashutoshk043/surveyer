import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataLoaded: boolean = true
  allBlogs: any
  row1Cards: any
  row2Cards: any
  row3Cards: any
  categories: any = [
  'tech',
  'food',
  'lifestyle',
  'travel',
  'health',
  'finance',
  'education',
  'science',
  'music',
  'sports',
  'art',
  'politics',
  'environment',
  'culture',
  'technology'
];


  constructor(private http: HttpClient, private router:Router) {

  }

  ngOnInit() {
    this.getblogs()
  }

getblogs() {
  const skip: number = 0;
  const limit: number = 12; // 4 for each row
  const params = { skip: skip.toString(), limit: limit.toString() };

  this.http.get(`${environment.serverUrl}/connected/getAllblogs`, { params }).subscribe({
    next: (res: any) => {
      const all = res?.data || [];

      all.forEach((e: any) => {
        const randomIndex = Math.floor(Math.random() * 15); // 0 to 15
        e.color = this.categories[randomIndex];

        // Truncate description to 150 chars (or any length you prefer)
        if (e.description && e.description.length > 700) {
          e.description = e.description.slice(0, 700) + '...';
        }
      });

      this.allBlogs = all;

      // Divide into rows
      this.row1Cards = all.slice(0, 4);
      this.row2Cards = all.slice(4, 8);
      this.row3Cards = all.slice(8, 12);

      setTimeout(() => {
        this.dataLoaded = false;
      },0);
    },
    error: (err) => {
      console.error("Error fetching blogs:", err);
    }
  });
}


}
