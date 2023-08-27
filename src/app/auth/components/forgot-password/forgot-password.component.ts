import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordDetails: FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private service:AuthService){}

ngOnInit(): void {
  this.forgotPasswordDetails = this.fb.group({
    email:['',Validators.required],
    
  });
}

submitFrom(){
  
}

}
