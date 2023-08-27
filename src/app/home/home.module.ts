import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
// import { RegisterComponent } from './components/register/register.component'
import { RouterModule, Routes } from "@angular/router";
// import { AuthService } from "./services/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeRoutingModule } from "./home.routing.module";
import { AuthInterceptor } from "../auth/services/authservice.interceptor";
import { HomeComponent } from "./home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";

 const routes: Routes=[
   
 
 ]
@NgModule({
    imports:[RouterModule.forChild(routes),ReactiveFormsModule,CommonModule,HomeRoutingModule],
  declarations: [SidebarComponent,HeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  },
]
})
export class HomeModule{}