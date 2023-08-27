import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn:'root'
})
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService:AuthService){}
  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler):Observable<HttpEvent<any>> {
      const token = this.authService.getToken();
      debugger;
      req = req.clone({
        setHeaders:{
          Authorization: 'Bearer ${token}'
           }
      });
       return next.handle(req);
  }
}


// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
// import { Observable, switchMap } from "rxjs"
// import { LocalService } from "src/services/storage.service";
// import { AuthService } from "./auth.service";
// import { environment } from "src/app/enviornments/enviornment";
// import { Injectable } from "@angular/core";
// @Injectable({
//   providedIn:'root'
// })
// export class AuthInterceptor implements HttpInterceptor{
//   constructor(private authService:AuthService){}
//   intercept(
//     req: HttpRequest<any>, 
//     next: HttpHandler):Observable<HttpEvent<any>> {
//       const isApiUrl = req.url.startsWith(environment.apiUrl)
//       return this.authService.isLoggedIn().pipe(
//         switchMap(token=>{
//           if(token && isApiUrl){
//            req = req.clone({
//               setHeaders:{
//                       Authorization: 'Bearer ${token}'
//                    }
//             });
//           }
//           return next.handle(req)
//         })
//       )
//   }
// }