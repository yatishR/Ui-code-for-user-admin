import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotiFicationervice } from '../../services/notification.service';
import { NotificationType } from '../../services/enum';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/common/modal/modal.component';
import { DialogserviceService } from 'src/app/shared/dialogservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string | null= null;
  iconname='eye-outline';
  isLogin=false;
  type:boolean = true;
  disabled = false;
  name: string | undefined;
  color: string | undefined;
  constructor(private dialogService: DialogserviceService,public dialog: MatDialog,private toast:ToastrService,private notificationService:NotiFicationervice,private fb:FormBuilder,private service:AuthService, private route:Router){}
  formDetails = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });

  // dialogformDetails = this.fb.group({
  //     name:['']
  // })

  ngOnInit(): void {
    this.isLoggedIn();
  }



  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '400px',
  //     data: { name: this.name, color: this.color },
  //   });
  //   dialogRef.afterClosed().subscribe((res) => {
  //     this.color = res;
  //   });
  // }

//   showMessage(){
//  this.toast.info("dshfjsdhfjdh")
//     // this.notificationService.sendeMessage({
//     //   message:"Text SuccessFully",
//     //   type:NotificationType.success,
      
//     // })
//   }

  changetype(){
    this.type =!this.type;
    // if(this.iconname =='eye-outline'){
    //  this.type = 'text'
    //  this.iconname = 'eye-of-outline'
    // }else{
    //   this.type = 'password'
    //  this.iconname = 'eye-outline'
    // }
  }
    
  async isLoggedIn() {
    try {
      const val = await this.service.getToken();
      console.log(val);
    } catch(e) {
      console.log(e);
    }
  }

  loginFrom():void{
    this.dialogService.openDialog('user succesfully login');
    // this.dialogService.openDialog('user succesfully login').afterClosed().subscribe(res=>{
    //   console.log(res);
    // })
      //this.disabled = true;
      console.log(this.formDetails.value);
       this.service.login(this.formDetails.value).then(res=>{
         console.log(res,"err");
     })
     // setTimeout(() => this.disabled = false, 5000);
      // setTimeout(() =>  this.toastMessage(), 500000);
      // this.toastMessage()
    // this.service.registerUser(this.formDetails.value).subscribe(res=>{

    // }
    // this.service.logIn(this.formDetails.value).subscribe({
    //   next:(currentUser)=>{
    //     console.log('currentUser',currentUser)
    //     this.error = '';
    //     this.formDetails.reset();
    //     //this.route.navigate(['./home']);
    //     this.service.setToken(currentUser);
    //     this.service.setCurrentUser(currentUser);
    //     this.route.navigate(['../home']);
    //   },error:(err:HttpErrorResponse)=>{
    //     console.log('err',err.error)
    //     this.error = err.error.emailOrPassword;
    //   }
    // })
    //console.log(this.formDetails.value)
  }

}
