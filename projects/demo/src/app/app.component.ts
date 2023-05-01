import { Component } from '@angular/core';
import {
  ILoginRes,
  LoginOptions,
} from 'dist/login-lib/lib/login-lib.interface';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  title = 'demo';

  $loginApi = this.apiService.login.bind(this.apiService);

  loginOptions: LoginOptions = {
    header: 'ورود اعضا',
    footerLabel: 'نسخه دمو',
    usernameBindName: 'username',
    passwordBindName: 'password',
    responseTokenKey: 'token'
  };

  loginRes(response: ILoginRes) {
    if (response.success) alert('Success, redirect to dashboard');
    else alert('Fail');
  }
}
