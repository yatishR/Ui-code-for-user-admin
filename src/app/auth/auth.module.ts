import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { RegisterComponent } from './components/register/register.component'
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import { guardServiceGuard } from "./services/authGuard.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./services/authservice.interceptor";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from "../home/home.component";
import { HomeModule } from "../home/home.module";
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AnimationTriggerMetadata } from '@angular/animations'
import { ɵAnimationEngine } from '@angular/animations/browser'
import { ToastrModule } from 'ngx-toastr';
const routes: Routes=[
   
    {
        path:'login',
        component:LoginComponent,
       // canActivate:[guardServiceGuard]
      },
    
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  }
  // {
  //   path:'home',
  //   loadChildren: () => import('../home/home.routing.module').then(m => m.HomeRoutingModule)
  // }
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
//   {
//     path:'**',
//     component:LoginComponent
//   },
 
 ]
@NgModule({
    imports:[RouterModule.forChild(routes),
      ReactiveFormsModule,
      CommonModule,MatInputModule,
      MatFormFieldModule,
      HomeModule,
      MatIconModule,
      MatProgressSpinnerModule,
      BrowserAnimationsModule,ToastrModule.forRoot()],
      
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AuthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  },
]
})
export class AuthModule{}