import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "boolean-toggler",
  templateUrl: "./boolean-toggler.component.html",
  styleUrls: ["./boolean-toggler.component.scss"]
})
export class BooleanTogglerComponent {
  @Input() bool: boolean;

  @Input() header: string;
  @Input() pos_text: string;
  @Input() neg_text: string;

  @Output() change = new EventEmitter();

  updateBool = (bool: boolean) => {
    this.bool = bool;
    this.change.emit(bool);
  };
}
