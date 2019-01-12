import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "point-slider",
  templateUrl: "./point-slider.component.html",
  styleUrls: ["./point-slider.component.scss"]
})
export class PointSliderComponent {
  @Input() points: number;
  @Input() suffix: string;

  @Output() change = new EventEmitter();

  verifyInput = () => {
    if (this.points < 0) this.points = 0;
    if (this.points > 2000) this.points = 2000;
    this.points = Math.round(this.points);

    this.change.emit(this.points);
  };
}
