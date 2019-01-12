import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

export interface LoadingDialogData {}

@Component({
  selector: "loading-edit",
  templateUrl: "./loading-edit.component.html",
  styleUrls: ["./loading-edit.component.scss"]
})
export class LoadingEditDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: LoadingDialogData) {}
}
