import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
