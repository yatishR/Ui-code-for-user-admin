import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './home/sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
 
 
 
  // {
  //   path:'sidebar',
  //   component:SidebarComponent
  // },
  // {
  //   path:'header',
  //   component:HeaderComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
