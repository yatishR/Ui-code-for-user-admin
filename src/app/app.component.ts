import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild(MatSidenav) sidenav!:MatSidenav
  // url:any
  constructor(private observer:BreakpointObserver){}

  // }
  // ngOnInIt(){
  //   this.url = "/src/assets/download-removebg-preview.JPG" 
  // }
  
  // ngAfterViewInit(){
  //   this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
  //     if(res.matches){
  //       this.sidenav.mode='over';
  //       this.sidenav.close()
  //     }else{
  //       this.sidenav.mode='side';
  //       this.sidenav.open();
  //     }
  //   })
  // }

  title = 'angular-tour-of-heroes';

}
