import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Facebook } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController, public authData: AuthData, public fb: Facebook) {}
  logOut(){
  this.authData.logoutUser().then(() => {
    this.nav.setRoot(LoginPage);
  });
}

fblogin(){
  Facebook.login(['email']).then((response) => {
    alert('Logged in');
    alert(JSON.stringify(response.authResponse));
  },(error) => {
    alert(error);
  })
}

fbgetdetails(){
  Facebook.getLoginStatus().then((response) => {
    if(response.status == 'connected'){
      Facebook.api('/' + response.authResponse.userID + '?fields=id,name,gender',[]).then((response) => {
        alert(JSON.stringify(response));
      }, (error) => {
        alert(error);
      })
    }
    else{
      alert('Not Logged In');
    }
  })
}

fblogout(){
  Facebook.logout().then((response) => {
    alert(JSON.stringify(response));
  }, (error) => {
    alert(error);
  })
}

}
