import { Router } from "@angular/router";
import { PlayerService } from "./../../services/player/player.service";
import { Component, OnDestroy } from "@angular/core";
import { GameService } from "src/app/services/game/game.service";

@Component({
  selector: "join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"]
})
export class JoinComponent implements OnDestroy {
  loading: boolean = false;
  recieved: string;

  error: boolean = false;

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
    private route: Router
  ) {}

  ngOnDestroy() {
    this.error = false;
    this.loading = false;
  }

  checkJoinGame = (input: string) => {
    this.loading = true;

    this.gameService.isRealGame(input).subscribe((exists: boolean) => {
      setTimeout(() => {
        if (exists) {
          this.gameService.setPlayer(true);
          this.gameService.join_code = input;
          return this.route.navigate(["/name"]);
        }

        this.error = true;
        this.loading = false;
      }, 0);
    });
  };
}
