import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  dataLoaded: boolean = false
  allBlogs: any
  row1Cards: any
  row2Cards: any
  row3Cards: any

  
  constructor(private http: HttpClient) {

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

        // Store all blogs if needed
        this.allBlogs = all;

        // Divide into rows
        this.row1Cards = all.slice(0, 4);
        this.row2Cards = all.slice(4, 8);
        this.row3Cards = all.slice(8, 12);
      },
      error: (err) => {
        console.error("Error fetching blogs:", err);
      }
    });
  }



}
