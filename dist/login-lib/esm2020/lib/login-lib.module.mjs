import { NgModule } from '@angular/core';
import { LoginLibComponent } from './login-lib.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, } from '@abacritt/angularx-social-login';
import * as i0 from "@angular/core";
export class LoginLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xvZ2luLWxpYi9zcmMvbGliL2xvZ2luLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQ0wsaUJBQWlCLEdBRWxCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUNMLG1CQUFtQixHQUNwQixNQUFNLGlDQUFpQyxDQUFDOztBQU16QyxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQVk7UUFDekIsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUseUJBQXlCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ1IsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRTs0QkFDVDtnQ0FDRSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsV0FBVztnQ0FDbkMsUUFBUSxFQUFFLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUM7NkJBQ3JFO3lCQUNGO3dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFOzRCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLENBQUM7cUJBQ3lCO2lCQUM3QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzJHQXRCVSxjQUFjOzRHQUFkLGNBQWMsaUJBSlYsaUJBQWlCLGFBQ3RCLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLGFBQ2pFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXOzRHQUUzQyxjQUFjLFlBSGYsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFDOUMsWUFBWSxFQUFFLFdBQVc7MkZBRTNDLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7b0JBQzVFLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7aUJBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2luTGliQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExvZ2luT3B0aW9ucyB9IGZyb20gJy4vbG9naW4tbGliLmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBTb2NpYWxMb2dpbk1vZHVsZSxcbiAgU29jaWFsQXV0aFNlcnZpY2VDb25maWcsXG59IGZyb20gJ0BhYmFjcml0dC9hbmd1bGFyeC1zb2NpYWwtbG9naW4nO1xuaW1wb3J0IHtcbiAgR29vZ2xlTG9naW5Qcm92aWRlcixcbn0gZnJvbSAnQGFiYWNyaXR0L2FuZ3VsYXJ4LXNvY2lhbC1sb2dpbic7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkxpYkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBTb2NpYWxMb2dpbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMb2dpbkxpYkNvbXBvbmVudCwgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxMb2dpbkxpYk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTG9naW5MaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdTb2NpYWxBdXRoU2VydmljZUNvbmZpZycsXG4gICAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICAgIGF1dG9Mb2dpbjogZmFsc2UsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBHb29nbGVMb2dpblByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBuZXcgR29vZ2xlTG9naW5Qcm92aWRlcihvcHRpb25zLmdvb2dsZUNsaWVudElkIHx8ICdlbXB0eScpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9IGFzIFNvY2lhbEF1dGhTZXJ2aWNlQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=