import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../servicio/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( private servicio: AuthService,
               private router: Router) {}
               
  async canActivate() {
      const user = await this.servicio.estoyAutenticado();
      if (user) {
        console.log("Usuario autenticado");
        return true;
      } else {
        console.log("Usuario no autenticado");
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
