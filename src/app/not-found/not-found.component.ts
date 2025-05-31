import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
standalone: true,
  template: `
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a routerLink="/" class="btn btn-primary">Go to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 70vh;
      text-align: center;
      color: #444;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    h1 {
      font-size: 6rem;
      margin: 0;
      color: #e74c3c;
    }
    h2 {
      font-size: 2rem;
      margin: 10px 0 20px;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    a.btn {
      text-decoration: none;
      padding: 12px 25px;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    a.btn:hover {
      background-color: #0056b3;
    }
  `],
  imports:[RouterModule]
})
export class NotFoundComponent {

}
