import * as i0 from '@angular/core';
import { EventEmitter, inject, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialLoginModule } from '@abacritt/angularx-social-login';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

function mergeLoginOptions(opts) {
    return { ...defaultOptions, ...opts };
}
const defaultOptions = {
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

class LoginLibComponent {
    //create form
    constructor(fb) {
        this.fb = fb;
        //style input
        this.options = { ...defaultOptions };
        //form variables
        this.submitSpinner = false;
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            rememberMe: [false],
        });
        this.loginRes = new EventEmitter();
        //inject google login
        inject(SocialAuthService);
    }
    ngOnInit() { }
    ngOnChanges(changes) {
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
        let data = {};
        data[this.options.usernameBindName] = this.form.get('username')?.value;
        data[this.options.passwordBindName] = this.form.get('username')?.value;
        this.$loginApi(data)?.subscribe({
            next: (res) => {
                this.submitSpinner = false;
                this.tokenHandler(res[this.options.responseTokenKey]);
                this.loginRes.emit({
                    success: true,
                    res,
                });
            },
            error: (err) => {
                this.submitSpinner = false;
                this.loginRes.emit({
                    success: false,
                    res: err,
                });
            },
        });
    }
    tokenHandler(token) {
        const storage = this.form.get('rememberMe')?.value
            ? localStorage
            : sessionStorage;
        storage.setItem('token', token);
    }
}
LoginLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: LoginLibComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
LoginLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.8", type: LoginLibComponent, selector: "lib-login-sh", inputs: { options: "options", $loginApi: ["loginApi", "$loginApi"] }, outputs: { loginRes: "loginRes" }, usesOnChanges: true, ngImport: i0, template: "<hgroup>\r\n  <h1>{{ options.header }}</h1>\r\n</hgroup>\r\n<form (ngSubmit)=\"submit()\" [formGroup]=\"form\" name=\"loginForm\">\r\n  <div class=\"group\">\r\n    <input class=\"text-box\" formControlName=\"username\" type=\"text\" /><span\r\n      class=\"highlight\"\r\n    ></span\r\n    ><span class=\"bar\"></span>\r\n    <label class=\"input\"\r\n      [ngClass]=\"{\r\n        'text-danger':\r\n          form.get('username')?.touched &&\r\n          form.get('username')?.hasError('required')\r\n      }\"\r\n      >{{ options.usernameLabel }}</label\r\n    >\r\n  </div>\r\n  <div class=\"group\">\r\n    <input class=\"text-box\" formControlName=\"password\" type=\"password\" /><span\r\n      class=\"highlight\"\r\n    ></span\r\n    ><span class=\"bar\"></span>\r\n    <label class=\"input\"\r\n      [ngClass]=\"{\r\n        'text-danger':\r\n          form.get('password')?.touched &&\r\n          form.get('password')?.hasError('required')\r\n      }\"\r\n      >{{ options.passwordLabel }}</label\r\n    >\r\n  </div>\r\n\r\n  <div *ngIf=\"options.rememberMe\" class=\"remember-holder\">\r\n    <label>{{options.rememberMeLabel}}</label>\r\n    <input type=\"checkbox\" formControlName=\"rememberMe\" />\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"button buttonBlue\" [disabled]=\"submitSpinner\">\r\n    {{ options.submitLabel }}\r\n  </button>\r\n</form>\r\n<!-- footer section -->\r\n<section>\r\n  <span *ngIf=\"options.logo\">\r\n    <img [src]=\"options.logo\" />\r\n  </span>\r\n  <p>\r\n    {{ options.footerLabel }}\r\n  </p>\r\n</section>\r\n\r\n<!-- end footer section -->\r\n", styles: ["*{box-sizing:border-box;direction:rtl;font-family:sans-serif}body{font-family:Helvetica;background:#eee;-webkit-font-smoothing:antialiased}hgroup{text-align:center;margin-top:4em}h1,h3{font-weight:300}h1{color:#636363}h3{color:#4a89dc}form{width:380px;margin:4em auto;padding:3em 2em 2em;background:#fafafa;border:1px solid #ebebeb;box-shadow:#00000026 0 1px 1px,#00000019 0 1px 2px}.group{position:relative;margin-bottom:45px}input.text-box{font-size:18px;padding:10px 10px 10px 5px;-webkit-appearance:none;display:block;background:#fafafa;color:#636363;width:100%;border:none;border-radius:0;border-bottom:1px solid #757575}input.text-box:focus{outline:none}label.input{color:#999;font-size:18px;font-weight:400;position:absolute;pointer-events:none;right:5px;top:-20px;transition:all .2s ease;transform:scale(.75)}input.text-box:focus~label.input.text-box,input.text-box.used~label.input.text-box{top:-20px;transform:scale(1);right:-2px;color:#4a89dc}.bar{position:relative;display:block;width:100%}.bar:before,.bar:after{content:\"\";height:2px;width:0;bottom:1px;position:absolute;background:#4a89dc;transition:all .2s ease}.bar:before{right:50%}.bar:after{left:50%}input.text-box:focus~.bar:before,input.text-box:focus~.bar:after{width:50%}.highlight{position:absolute;height:60%;width:100px;top:25%;right:0;pointer-events:none;opacity:.5}input.text-box:focus~.highlight{animation:input.text-boxHighlighter .3s ease}@keyframes input.text-boxHighlighter{from {background: #4a89dc;} to {width: 0; background: transparent;}}.button{position:relative;display:inline-block;padding:12px 24px;margin:.3em 0 1em;width:100%;vertical-align:middle;color:#fff;font-size:16px;line-height:20px;-webkit-font-smoothing:antialiased;text-align:center;letter-spacing:1px;background:transparent;border:0;border-bottom:2px solid #3160b6;cursor:pointer;transition:all .15s ease}.button:focus{outline:0}.buttonBlue{background:#4a89dc;text-shadow:1px 1px 0 rgba(39,110,204,.5)}.buttonBlue:hover{background:#357bd8}.ripples{position:absolute;top:0;right:0;width:100%;height:100%;overflow:hidden;background:transparent}.ripplesCircle{position:absolute;top:50%;right:50%;transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25)}.ripples.is-active .ripplesCircle{animation:ripples .4s ease-in}@keyframes ripples{0%{opacity:0}25%{opacity:1}to{width:200%;padding-bottom:200%;opacity:0}}section{text-align:center}section p{color:#888;font-size:13px;letter-spacing:.4px}section a{color:#4a89dc;text-decoration:none;transition:all .2s ease}section a:hover{color:#666;text-decoration:underline}section img{width:80px;transition:all .2s ease}section img:hover{opacity:.83}section img:focus,section a:focus{outline:none}section p{text-align:center}.text-danger{color:red!important}button:disabled,button[disabled]{background-color:#ccc;color:#666}.remember-holder{margin-bottom:15px}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: LoginLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login-sh', template: "<hgroup>\r\n  <h1>{{ options.header }}</h1>\r\n</hgroup>\r\n<form (ngSubmit)=\"submit()\" [formGroup]=\"form\" name=\"loginForm\">\r\n  <div class=\"group\">\r\n    <input class=\"text-box\" formControlName=\"username\" type=\"text\" /><span\r\n      class=\"highlight\"\r\n    ></span\r\n    ><span class=\"bar\"></span>\r\n    <label class=\"input\"\r\n      [ngClass]=\"{\r\n        'text-danger':\r\n          form.get('username')?.touched &&\r\n          form.get('username')?.hasError('required')\r\n      }\"\r\n      >{{ options.usernameLabel }}</label\r\n    >\r\n  </div>\r\n  <div class=\"group\">\r\n    <input class=\"text-box\" formControlName=\"password\" type=\"password\" /><span\r\n      class=\"highlight\"\r\n    ></span\r\n    ><span class=\"bar\"></span>\r\n    <label class=\"input\"\r\n      [ngClass]=\"{\r\n        'text-danger':\r\n          form.get('password')?.touched &&\r\n          form.get('password')?.hasError('required')\r\n      }\"\r\n      >{{ options.passwordLabel }}</label\r\n    >\r\n  </div>\r\n\r\n  <div *ngIf=\"options.rememberMe\" class=\"remember-holder\">\r\n    <label>{{options.rememberMeLabel}}</label>\r\n    <input type=\"checkbox\" formControlName=\"rememberMe\" />\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"button buttonBlue\" [disabled]=\"submitSpinner\">\r\n    {{ options.submitLabel }}\r\n  </button>\r\n</form>\r\n<!-- footer section -->\r\n<section>\r\n  <span *ngIf=\"options.logo\">\r\n    <img [src]=\"options.logo\" />\r\n  </span>\r\n  <p>\r\n    {{ options.footerLabel }}\r\n  </p>\r\n</section>\r\n\r\n<!-- end footer section -->\r\n", styles: ["*{box-sizing:border-box;direction:rtl;font-family:sans-serif}body{font-family:Helvetica;background:#eee;-webkit-font-smoothing:antialiased}hgroup{text-align:center;margin-top:4em}h1,h3{font-weight:300}h1{color:#636363}h3{color:#4a89dc}form{width:380px;margin:4em auto;padding:3em 2em 2em;background:#fafafa;border:1px solid #ebebeb;box-shadow:#00000026 0 1px 1px,#00000019 0 1px 2px}.group{position:relative;margin-bottom:45px}input.text-box{font-size:18px;padding:10px 10px 10px 5px;-webkit-appearance:none;display:block;background:#fafafa;color:#636363;width:100%;border:none;border-radius:0;border-bottom:1px solid #757575}input.text-box:focus{outline:none}label.input{color:#999;font-size:18px;font-weight:400;position:absolute;pointer-events:none;right:5px;top:-20px;transition:all .2s ease;transform:scale(.75)}input.text-box:focus~label.input.text-box,input.text-box.used~label.input.text-box{top:-20px;transform:scale(1);right:-2px;color:#4a89dc}.bar{position:relative;display:block;width:100%}.bar:before,.bar:after{content:\"\";height:2px;width:0;bottom:1px;position:absolute;background:#4a89dc;transition:all .2s ease}.bar:before{right:50%}.bar:after{left:50%}input.text-box:focus~.bar:before,input.text-box:focus~.bar:after{width:50%}.highlight{position:absolute;height:60%;width:100px;top:25%;right:0;pointer-events:none;opacity:.5}input.text-box:focus~.highlight{animation:input.text-boxHighlighter .3s ease}@keyframes input.text-boxHighlighter{from {background: #4a89dc;} to {width: 0; background: transparent;}}.button{position:relative;display:inline-block;padding:12px 24px;margin:.3em 0 1em;width:100%;vertical-align:middle;color:#fff;font-size:16px;line-height:20px;-webkit-font-smoothing:antialiased;text-align:center;letter-spacing:1px;background:transparent;border:0;border-bottom:2px solid #3160b6;cursor:pointer;transition:all .15s ease}.button:focus{outline:0}.buttonBlue{background:#4a89dc;text-shadow:1px 1px 0 rgba(39,110,204,.5)}.buttonBlue:hover{background:#357bd8}.ripples{position:absolute;top:0;right:0;width:100%;height:100%;overflow:hidden;background:transparent}.ripplesCircle{position:absolute;top:50%;right:50%;transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25)}.ripples.is-active .ripplesCircle{animation:ripples .4s ease-in}@keyframes ripples{0%{opacity:0}25%{opacity:1}to{width:200%;padding-bottom:200%;opacity:0}}section{text-align:center}section p{color:#888;font-size:13px;letter-spacing:.4px}section a{color:#4a89dc;text-decoration:none;transition:all .2s ease}section a:hover{color:#666;text-decoration:underline}section img{width:80px;transition:all .2s ease}section img:hover{opacity:.83}section img:focus,section a:focus{outline:none}section p{text-align:center}.text-danger{color:red!important}button:disabled,button[disabled]{background-color:#ccc;color:#666}.remember-holder{margin-bottom:15px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { options: [{
                type: Input
            }], $loginApi: [{
                type: Input,
                args: ['loginApi']
            }], loginRes: [{
                type: Output,
                args: ['loginRes']
            }] } });

class LoginLibModule {
    static forRoot(options) {
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
                    },
                },
            ],
        };
    }
}
LoginLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: LoginLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoginLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.8", ngImport: i0, type: LoginLibModule, declarations: [LoginLibComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule, SocialLoginModule], exports: [LoginLibComponent, CommonModule, FormsModule] });
LoginLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: LoginLibModule, imports: [CommonModule, FormsModule, ReactiveFormsModule, SocialLoginModule, CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: LoginLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LoginLibComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, SocialLoginModule],
                    exports: [LoginLibComponent, CommonModule, FormsModule],
                }]
        }] });

/*
 * Public API Surface of login-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoginLibComponent, LoginLibModule, defaultOptions, mergeLoginOptions };
//# sourceMappingURL=login-lib.mjs.map
