import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:string;
  private contrasena:string;

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  emailLogin(){
    console.log(this.email)
    this.authService.loginEmailContrasena(this.email, this.contrasena)
  }

}
