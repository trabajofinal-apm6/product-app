import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfileDetailPage } from '../pages/profile-detail/profile-detail';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { LoginDetailPage } from '../pages/login-detail/login-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbServiceProvider } from '../providers/db-service/db-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyDT1WArayZ9uXvJzrp-G5KDof3AdcPIm4A",
  authDomain: "trabajofinalapm6productapp.firebaseapp.com",
  databaseURL: "https://trabajofinalapm6productapp.firebaseio.com",
  projectId: "trabajofinalapm6productapp",
  storageBucket: "trabajofinalapm6productapp.appspot.com",
  messagingSenderId: "899633316104"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfileDetailPage,
    ProductDetailPage,
    LoginDetailPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfileDetailPage,
    ProductDetailPage,
    LoginDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbServiceProvider,
    ProfileServiceProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
