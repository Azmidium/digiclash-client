import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "answer-slider",
  templateUrl: "./answer-slider.component.html",
  styleUrls: ["./answer-slider.component.scss"]
})
export class AnswerSliderComponent {
  @Input() answer_time: number;
  @Input() suffix: string;

  @Output() change = new EventEmitter();

  verifyInput = () => {
    if (this.answer_time < 5) this.answer_time = 5;
    if (this.answer_time > 300) this.answer_time = 300;
    this.answer_time = Math.round(this.answer_time);

    this.change.emit(this.answer_time);
  };
}
