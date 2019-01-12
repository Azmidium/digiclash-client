import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "leaderboard-slider",
  templateUrl: "./leaderboard-slider.component.html",
  styleUrls: ["./leaderboard-slider.component.scss"]
})
export class LeaderboardSliderComponent {
  @Input() leaderboard_time: number;
  @Input() suffix: string;

  @Output() change = new EventEmitter();

  verifyInput = () => {
    if (this.leaderboard_time < 0) this.leaderboard_time = 0;
    if (this.leaderboard_time > 300) this.leaderboard_time = 300;
    this.leaderboard_time = Math.round(this.leaderboard_time);

    this.change.emit(this.leaderboard_time);
  };
}
