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
export declare function mergeLoginOptions(opts: LoginOptions): LoginOptions;
export declare const defaultOptions: LoginOptions;
export interface ILoginRes {
    success: boolean;
    res: any;
}
