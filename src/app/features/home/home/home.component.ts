import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataLoaded: boolean = false
  row1CardsDummy = [1,2,3,4];
  row2CardsDummy = [1,2,3,4];
  row3CardsDummy = [1,2,3,4];


  constructor(private http:HttpClient){

  }

  ngOnInit() {
    setTimeout(() => {
      this.dataLoaded = true
    }, 3000)
  }

  getblogs(){
    
  }

}
