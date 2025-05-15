import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [MatSlideToggleModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      title: 'Card 1',
      image: 'https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/5e62f6f4dad6467a6ba6a589_pie%20sample%203.webp',
      description: 'This is the first card.',
      tag:"",
      author:""
    },
    {
      title: 'Card 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoJVaTGo1WYJ3JrQQzMuJ1s9lRQuuruDVpg&s',
      description: 'This is the second card.',
      tag:"",
      author:""
    },
    {
      title: 'Card 1',
      image: 'https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/5e62f6f4dad6467a6ba6a589_pie%20sample%203.webp',
      description: 'This is the first card.',
      tag:"",
      author:""
    },
    {
      title: 'Card 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoJVaTGo1WYJ3JrQQzMuJ1s9lRQuuruDVpg&s',
      description: 'This is the second card.',
      tag:"",
      author:""
    },
    {
      title: 'Card 1',
      image: 'https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/5e62f6f4dad6467a6ba6a589_pie%20sample%203.webp',
      description: 'This is the first card.',
      tag:"",
      author:""
    },
    {
      title: 'Card 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoJVaTGo1WYJ3JrQQzMuJ1s9lRQuuruDVpg&s',
      description: 'This is the second card.',
      tag:"",
      author:""
    }
  ];
  
}
