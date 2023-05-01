import { InjectionToken } from '@angular/core';

export interface LoginOptions {
  header?: string;
  usernameLabel?: string;
  passwordLabel?: string;
  submitLabel?: string;
  footerLabel?: string;
  logo?: string;
  rememberMe?: boolean | null;
  rememberMeLabel?: string;
  usernameBindName: string;
  passwordBindName: string;
  responseTokenKey: string;
}

export function mergeLoginOptions(opts: LoginOptions): LoginOptions {
  return { ...defaultOptions, ...opts };
}

export const defaultOptions: LoginOptions = {
  header: '',
  usernameLabel: 'نام کاربری',
  passwordLabel: 'کلمه عبور',
  submitLabel: 'ورود',
  footerLabel: '',
  logo: '',
  rememberMe: true,
  rememberMeLabel: 'من را به خاطر بسپار',
  usernameBindName: '',
  passwordBindName: '',
  responseTokenKey: ''
};

export interface ILoginRes {
  success: boolean;
  res: any;
}
