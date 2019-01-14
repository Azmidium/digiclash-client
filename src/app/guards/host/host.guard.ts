import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { GameService } from "src/app/services/game/game.service";

@Injectable({
  providedIn: "root"
})
export class HostGuard implements CanActivate {
  constructor(private gameService: GameService, private route: Router) {}

  canActivate = () => {
    if (this.gameService.isHost()) return true;

    this.route.navigate(["/dashboard"]);
    return false;
  };
}
