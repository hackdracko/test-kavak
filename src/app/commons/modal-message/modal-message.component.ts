import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent {

  constructor( public dialogRef: MatDialogRef<ModalMessageComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {
  }

  next(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close();
  }

}
