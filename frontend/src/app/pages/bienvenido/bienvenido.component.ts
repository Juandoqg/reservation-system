import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css'],
  standalone: true
})
export class BienvenidoComponent {

  constructor(private authService: AuthService ,private router: Router) {}

  goToReservations() {
    this.router.navigate(['/reservations']);  // Cambia esta ruta por la que corresponda
  }
  logout() {
    this.authService.logout();
  }

}
