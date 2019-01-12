import { Component, Input } from "@angular/core";

@Component({
  selector: "char-limit",
  templateUrl: "./char-limit.component.html",
  styleUrls: ["./char-limit.component.scss"]
})
export class CharLimitComponent {
  @Input() text: string;

  @Input() max: number;
  @Input() warn: number;
  @Input() danger: number;

  textLeft = () => (this.text ? this.max - this.text.length : this.max);
}
