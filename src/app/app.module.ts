import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//aqui va el archivo de cnfiguraciòn de firebase
import { firebaseConfig } from '../environments/firebase.config';

// con este import inicializamos nuestra App
import { AngularFireModule } from '@angular/fire';

//aqui va la importación de las autenticaciones
import { AngularFireAuthModule } from '@angular/fire/auth';

//Aqui vamos agregar nuestra base de datos
import { AngularFirestoreModule } from '@angular/fire/firestore'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), //para inicializar el App
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
