import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "one-field-form",
  templateUrl: "./one-field-form.component.html",
  styleUrls: ["./one-field-form.component.scss"]
})
export class OneFieldFormComponent {
  @Input() appearance: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() icon?: string;
  @Input() hint?: string;

  @Output() onEnter = new EventEmitter();
  @Output() onChange = new EventEmitter();

  input: string = "";

  sendEnterEvent = () => this.onEnter.emit(this.input);

  sendChangeEvent = () => this.onChange.emit(this.input);
}
