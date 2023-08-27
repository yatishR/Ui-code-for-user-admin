import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../common/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {

  constructor(private dialog:MatDialog) { }

  openDialog(msg:any){
    return this.dialog.open(ModalComponent,{
     width:'200px',
     disableClose:true,
     position:{top:'10px'},
     data:{
      message:msg
     }
    })
  }
  openDialogForError(){
    this.dialog.open(ModalComponent,{
     width:'200px',
     disableClose:true
    })
  }
}
