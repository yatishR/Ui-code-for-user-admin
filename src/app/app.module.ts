import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
// import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/services/auth.service';
import { AuthInterceptor } from './auth/services/authservice.interceptor';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LocalService } from 'src/services/storage.service';
import { ModalComponent } from './common/modal/modal.component';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    // SidebarComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatButtonModule,MatDividerModule,
  ],
  providers: [AuthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  },
  LocalService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
