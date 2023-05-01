import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILoginRes, LoginOptions } from './login-lib.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class LoginLibComponent implements OnInit, OnChanges {
    private fb;
    constructor(fb: FormBuilder);
    options: LoginOptions;
    $loginApi?: any;
    loginRes: EventEmitter<ILoginRes>;
    submitSpinner: boolean;
    form: FormGroup;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    submit(): void;
    tokenHandler(token: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginLibComponent, "lib-login-sh", never, { "options": "options"; "$loginApi": "loginApi"; }, { "loginRes": "loginRes"; }, never, never, false, never>;
}
