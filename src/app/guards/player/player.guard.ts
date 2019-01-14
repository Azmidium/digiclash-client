import { GameService } from "./../../services/game/game.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PlayerGuard implements CanActivate {
  constructor(private gameService: GameService, private route: Router) {}

  canActivate = () => {
    if (this.gameService.isPlayer()) return true;

    this.route.navigate(["/"]);
    return false;
  };
}
