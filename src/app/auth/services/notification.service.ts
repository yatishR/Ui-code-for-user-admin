import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NotificatioMessage } from "./notification";
import { ToastrService } from "ngx-toastr";
import { NotificationType } from "./enum";

@Injectable({
    providedIn:'root'
})
export class NotiFicationervice {

    private NotificationSubject:Subject<NotificatioMessage> = new Subject<NotificatioMessage>();

    sendeMessage(message:NotificatioMessage){
        this.NotificationSubject.next(message);
    }
    constructor(private toastService:ToastrService){
        this.NotificationSubject.subscribe(message=>{
            switch(message.type){
                case NotificationType.success:
                    this.toastService.success(message.message)
                    break;
                    case NotificationType.error:
                    this.toastService.error(message.message)
                    break;
                    case NotificationType.warning:
                    this.toastService.warning(message.message)
                    break;
                    case NotificationType.info:
                    this.toastService.info(message.message)
                    break;
                    default:
                        this.toastService.info(message.message)
                        break;

            }
        },err=>{
              console.log('Error when process in toaster');
        })
    }
}