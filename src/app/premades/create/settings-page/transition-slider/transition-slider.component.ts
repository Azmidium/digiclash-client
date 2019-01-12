import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "transition-slider",
  templateUrl: "./transition-slider.component.html",
  styleUrls: ["./transition-slider.component.scss"]
})
export class TransitionSliderComponent {
  @Input() transition_time: number;
  @Input() suffix: string;

  @Output() change = new EventEmitter();

  verifyInput = () => {
    if (this.transition_time < 0) this.transition_time = 0;
    if (this.transition_time > 15) this.transition_time = 15;
    this.transition_time = Math.round(this.transition_time);

    this.change.emit(this.transition_time);
  };
}
