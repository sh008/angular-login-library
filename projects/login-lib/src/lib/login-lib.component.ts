import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  ILoginRes,
  LoginOptions,
  defaultOptions,
  mergeLoginOptions,
} from './login-lib.interface';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
@Component({
  selector: 'lib-login-sh',
  templateUrl: './login-lib.component.html',
  styleUrls: ['./login-lib.component.css'],
})
export class LoginLibComponent implements OnInit, OnChanges {

  //create form
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });

    this.loginRes = new EventEmitter();


    //inject google login
    inject(SocialAuthService);
  }


  //style input
  @Input() options: LoginOptions = { ...defaultOptions };

  //observer login api input
  @Input('loginApi') $loginApi?: any;

  //send login Api res
  @Output('loginRes') loginRes: EventEmitter<ILoginRes>;

  //form variables
  submitSpinner: boolean = false;
  form: FormGroup;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.options = mergeLoginOptions(this.options);
  }

  submit() {
    //check validation
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitSpinner = true;

    //set send data
    let data: any = {};
    data[this.options.usernameBindName] = this.form.get('username')?.value;
    data[this.options.passwordBindName] = this.form.get('password')?.value;

    this.$loginApi(data)?.subscribe({
      next: (res: any) => {
        this.submitSpinner = false;
        this.tokenHandler(res[this.options.responseTokenKey]);
        this.loginRes.emit({
          success: true,
          res,
        });
      },
      error: (err: any) => {
        this.submitSpinner = false;
        this.loginRes.emit({
          success: false,
          res: err,
        });
      },
    });
  }

  tokenHandler(token: string) {
    const storage = this.form.get('rememberMe')?.value
      ? localStorage
      : sessionStorage;
    storage.setItem('token', token);
  }

}
