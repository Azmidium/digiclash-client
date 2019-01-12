import { Component } from "@angular/core";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent {
  constructor(public editCreateService: EditCreateService) {}

  leaderboard_change = $event => {
    if (!isNaN(Number($event)))
      this.editCreateService.question_set.leaderboard_time = $event;
  };

  transition_change = $event => {
    if (!isNaN(Number($event)))
      this.editCreateService.question_set.transition_time = $event;
  };
}
