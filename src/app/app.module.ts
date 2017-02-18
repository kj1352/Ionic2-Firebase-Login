import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/resetpassword/resetpassword';
import { SignupPage } from '../pages/signup/signup';
import { AuthData } from '../providers/auth-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, [AuthData]]
})
export class AppModule {}
