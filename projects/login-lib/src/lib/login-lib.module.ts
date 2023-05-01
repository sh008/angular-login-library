import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginLibComponent } from './login-lib.component';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginOptions } from './login-lib.interface';

@NgModule({
  declarations: [LoginLibComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LoginLibComponent, CommonModule, FormsModule],
})
export class LoginLibModule {}
