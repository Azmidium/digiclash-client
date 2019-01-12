import { PlayerService } from "./../../services/player/player.service";
import { Component } from "@angular/core";

@Component({
  selector: "join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"]
})
export class JoinComponent {
  recieved: string;

  constructor(private socketService: PlayerService) {}

  attemptJoinGame = (input: string) =>
    this.socketService.isRealGame(input).subscribe((exists: boolean) => {
      if (exists) this.socketService.joinGame(input, "Test User");
    });
}
