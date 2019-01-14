import { Component, OnDestroy } from "@angular/core";
import { PlayerService } from "src/app/services/player/player.service";
import { GameService } from "src/app/services/game/game.service";
import { Router } from "@angular/router";

@Component({
  selector: "display-name",
  templateUrl: "./display-name.component.html",
  styleUrls: ["./display-name.component.scss"]
})
export class DisplayNameComponent implements OnDestroy {
  error: boolean = false;
  loading: boolean = false;
  recieved: string;

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
    private route: Router
  ) {}

  ngOnDestroy() {
    this.error = false;
    this.loading = false;
  }

  attemptJoinGame = (input: string) => {
    if (!input || input === "" || input.length === 0) {
      this.error = true;
      return;
    }

    this.loading = true;

    this.gameService
      .isRealGame(this.gameService.getJoinCode())
      .subscribe((exists: boolean) => {
        setTimeout(() => {
          if (exists)
            return this.playerService.joinGame(
              this.gameService.getJoinCode(),
              input
            );

          this.gameService.reset();
          this.route.navigate(["/"]);
        }, 0);
      });
  };
}
