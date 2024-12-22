import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin = true;
  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    type: 'Seeker' as const
  };

  constructor(private authService: AuthService) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      this.authService.login(this.user.email, this.user.password);
    } else {
      this.authService.signup(this.user);
    }
  }
}