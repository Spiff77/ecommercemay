import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-detele-dialog',
  templateUrl: './detele-dialog.component.html',
  styleUrls: ['./detele-dialog.component.css']
})
export class DeteleDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeteleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  close() {
    this.dialogRef.close()
  }
}
