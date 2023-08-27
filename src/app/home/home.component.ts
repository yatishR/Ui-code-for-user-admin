import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 @ViewChild(MatSidenav) sidenav!:MatSidenav
  url:any
  constructor(private observer:BreakpointObserver){}
  ngOnInIt(){
    this.url = "/src/assets/download-removebg-preview.JPG" 
  }
  
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close()
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })
  }

}
