# LoginLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Clone Project

Run `git clone https://github.com/sh008/angular-login-library.git`

## Usage

Import the `LoginFormModule` inside a `login.module.ts` :

```typescript
import { LoginLibModule } from "login-lib";

@NgModule({
  imports: [LoginLibModule.forRoot({ googleClientId: "Client Id" })],
})
export class LoginModule {}
```

Add the lib-login-sh component inside a component :

```html
<lib-login-sh [options]="loginOptions" [loginApi]="$loginApi" (loginRes)="loginRes($event)"> </lib-login-sh>
```

<table>
    <tr>
        <th>Option</th>
        <th>Description</th>
        <th>Defeault Value</th>
    </tr>
    <tr>
        <th>header</th>
        <th>A text at the top of the page</th>
        <th>empty</th>
    </tr>
        <tr>
        <th>usernameLabel</th>
        <th>A text show at the first input</th>
        <th>نام کاربری</th>
    </tr>
            <tr>
        <th>passwordLabel</th>
        <th>A text show at the second input</th>
        <th>کلمه عبور</th>
    </tr>
            <tr>
        <th>submitLabel</th>
        <th>Button label</th>
        <th>ورود</th>
    </tr>
            <tr>
        <th>footerLabel</th>
        <th>A text show at the bottom of the page</th>
        <th>empty</th>
    </tr>
            <tr>
        <th>logo</th>
        <th>A Image show at the bottom of the page</th>
        <th>empty</th>
    </tr>
            <tr>
        <th>rememberMe</th>
        <th>If that is be true User can store self token if the local storage</th>
        <th>true</th>
    </tr>
            <tr>
        <th>usernameLabel</th>
        <th>A text show at the first input</th>
        <th>نام کاربری</th>
    </tr>
            <tr>
        <th>rememberMeLabel</th>
        <th>remember me label</th>
        <th> 'من را به خاطر بسپار'</th>
    </tr>
            <tr>
        <th>usernameBindName(required)</th>
        <th>library send username to Api in the this key propery</th>
        <th></th>
    </tr>
            <tr>
        <th>passwordBindName(required)</th>
        <th>library send password to Api in the this key propery</th>
        <th></th>
    </tr>
            <tr>
        <th>responseTokenKey(required)</th>
        <th>When status Api is 200 library check this propery from the response json and store value from that</th>
        <th></th>
    </tr>
    
</table>
