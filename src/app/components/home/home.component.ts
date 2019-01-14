import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { GameService } from "src/app/services/game/game.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router,
    private gameService: GameService,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit() {
    this.gameService.reset();
  }

  goToLogin = () => this.route.navigate(["/login"]);

  isMobile = () => this.deviceService.isMobile();
}
