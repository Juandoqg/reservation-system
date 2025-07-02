// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 

  imports: [FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
  console.log('Datos enviados:', this.email, this.password); // Agrega esto para verificar

  this.authService.login({ email: this.email, password: this.password }).subscribe({
    next: (response) => {
      this.authService.saveSession(response.access_token, this.email);
      this.router.navigate(['/bienvenido']);
    },
    error: () => {
      this.message = 'Credenciales incorrectas';
    }
  });
}

}
