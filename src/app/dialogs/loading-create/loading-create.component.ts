import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

export interface LoadingDialogData {}

@Component({
  selector: "loading-create",
  templateUrl: "./loading-create.component.html",
  styleUrls: ["./loading-create.component.scss"]
})
export class LoadingCreateDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: LoadingDialogData) {}
}
