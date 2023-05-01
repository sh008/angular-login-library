import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginLibComponent } from './login-lib.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginOptions } from './login-lib.interface';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [LoginLibComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SocialLoginModule],
  exports: [LoginLibComponent, CommonModule, FormsModule],
})
export class LoginLibModule {
  static forRoot(options: any): ModuleWithProviders<LoginLibModule> {
    return {
      ngModule: LoginLibModule,
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(options.googleClientId || 'empty'),
              },
            ],
            onError: (err) => {
              console.error(err);
            },
          } as SocialAuthServiceConfig,
        },
      ],
    };
  }
}
