import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  constructor(private service:AuthService){}
  fileuploadmessage!:string
  user_file:any;
  user:any
  loading:any
  ngOnInit(): void {
    
  }

  onChange(event:any){
    this.user =  event.target.files[0]
   

  }

  upload(){
    this.loading = !this.loading;
    this.service.fileUpload(this.user).subscribe((res)=>{
      debugger;
      this.fileuploadmessage = res;
      this.loading =false;
      console.log(res)

    })
  }

}
