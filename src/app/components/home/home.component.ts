import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit() {}

  goToLogin = () => this.route.navigate(["/login"]);

  isMobile = () => this.deviceService.isMobile();
}
