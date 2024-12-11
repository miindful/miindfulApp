import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    LoadingComponent,
    NavbarComponent
  ]
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Adjust the delay to control the loading screen duration
    setTimeout(() => {
      this.isLoading = false;
    }, 2450); // Display loading screen for 5 seconds
  }
}
