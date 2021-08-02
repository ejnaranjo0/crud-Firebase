import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth' //autenticación
import { Router } from '@angular/router'  //enrutar una pagina cuando se inicia sesión

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //inicio de autenticación 
  constructor( private auth:AngularFireAuth,
               private router: Router) { }


  // Verificar si estoy autenticado para validar el Guard
  estoyAutenticado( ){
    console.log(this.auth.currentUser)
    return this.auth.currentUser !== null;  // si si es diferente nos regresa un True sino regresa False
  }

  loginEmailContrasena(email:string, contrasena:string){
    this.auth.signInWithEmailAndPassword(email, contrasena)
    this.router.navigate(['/home']);
  }
  //fin de autenticación 


  //Logout -- cerrar sesión
  cerrarSesion(){
    this.auth.signOut().then(() => {
      console.log("Regresa pronto");
      this.router.navigate(['/login']);
    }).catch(err => console.log(err.message));
  }

} 

