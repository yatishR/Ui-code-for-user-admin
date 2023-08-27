import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter, from, map } from "rxjs";
import { CurrentUserInterface } from "../types/currentUser.interface";
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from "src/app/enviornments/enviornment";
import { Register } from "../types/register.interface";
import { LocalService } from "src/services/storage.service";
import { User } from "src/app/model/usermodel";
import { ApiService } from "./api.service";
@Injectable()
export class AuthService{
    currentUser$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(undefined)
     isLoggedIn$ = this.currentUser$.pipe(filter(currentuser=>currentuser!==undefined),map(Boolean));
    constructor(private storage:LocalService,private http:HttpClient,private localstorage:LocalService,private api:ApiService){}
     getCurrentUser():Observable<CurrentUserInterface>{
       const url = environment.apiUrl+"/user"
        return this.http.get<CurrentUserInterface>(url)
     }

     setCurrentUser(currentUser:CurrentUserInterface | null):void{
       this.currentUser$.next(currentUser);
     }

     registerUser(register:any):Observable<CurrentUserInterface>{
        const url = environment.apiUrl +"/users"
      return this.http.post<CurrentUserInterface>(url,register)
     }

     setToken(currentUser:CurrentUserInterface):void{
      localStorage.setItem('token',currentUser.token)
     }

    //  logIn1(logInData:any):Observable<CurrentUserInterface>{
    //     const url=environment.apiUrl +"/users/login";
    //     return this.http.post<CurrentUserInterface>(url,logInData)

    //  }

     fileUpload(file:any):Observable<any>{
      const url = environment.apiUrl +"/fileupload"
      const formData = new FormData()
      formData.append("file", file, file.name)
      return this.http.post(url,formData)

     }

     async register(formValue:any){
      const data = {
        email:formValue.email,
        password:formValue.password,
        name:formValue.name,
        phone:'9876543210',
        type:'user',
        status:'active'

      }

      /*when you are using urlencoded bodyParser */
      
      console.log(data,"service");
      try{
       const response = await this.api.post('/user/signup',data)
       console.log(response);
       this.setUserData(response?.token,"")
       return response;
      }catch(e){
       throw(e)
      }
      //return await this.localstorage.saveData('uid','dfjdhughfuighu')

     }

     async login(data:any){
      const dataobj = {
        email:data.email,
        password:data.password,

      }

      /*when you are using urlencoded bodyParser */
      
      console.log(data,"service");
      try{
       const response = await this.api.get('/user/login',data)
       this.setUserData(response?.token,"")
       console.log(response);
       return response;
      }catch(e){
       throw(e)
      }
      //return await this.localstorage.saveData('uid','dfjdhughfuighu')

     }

     setUserData(token:any,user:any){
       this.storage.saveData('token',token);
       //this.storage.saveData('user',JSON.stringify(user));
     }

     getToken(){
      //debugger;
      return this.storage.getData('token')
     }
      isLoggedIn(){
        return from(this.getToken());
      }
     async resetPassword(email:string){
      return email;
     }
}