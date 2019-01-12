import { NgModule } from "@angular/core";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [],
  exports: [CdkTableModule, CdkTreeModule, DragDropModule, ScrollingModule],
})
export class CdkModule {}
