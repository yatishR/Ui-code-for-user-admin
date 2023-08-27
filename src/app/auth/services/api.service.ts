import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/enviornments/enviornment";
@Injectable({
    providedIn:'root'
})
export class ApiService {
   constructor(
    private http:HttpClient
   ){}
get(url:any,data:any){
    data = new HttpParams({
        fromObject:data
      });
    return this.http.get<any>(environment.apiUrl + url,{ params:data}).toPromise();
   }
post(url:any,data:any){
    const body = new HttpParams({
        fromObject:data
      });
    return this.http.post<any>(environment.apiUrl + url,body).toPromise();
   }
}