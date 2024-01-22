import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/userService';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  public user: any;
  public error: any;
  public img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHI3ZXcFhwLfRDDpFxi4KSkrMrTKtWJ8_prvBp09Mtf3rZKg5TN8YsKgfPbYtKkDTBPA&usqp=CAU";

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(): void {
    this.userService.getUserById()
      .subscribe(
        data => {
          this.user = data.user;
        },
        error => {
          this.error = 'Failed to fetch user data.';
        }
      );
  }
}
