import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any;
  zone: NgZone;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyDXRlpiFWJFr-znaq2i3_E1jZNIwlNEaO4",
      authDomain: "lets-talk-877eb.firebaseapp.com",
      databaseURL: "https://lets-talk-877eb.firebaseio.com",
      storageBucket: "lets-talk-877eb.appspot.com",
      messagingSenderId: "138169621976"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.zone = new NgZone({});
const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  this.zone.run( () => {
    if (!user) {
      this.rootPage = LoginPage;
      unsubscribe();
    } else {
      this.rootPage = HomePage;
      unsubscribe();
    }
  });
});
  }
}
