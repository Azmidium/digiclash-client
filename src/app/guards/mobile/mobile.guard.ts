import { DeviceDetectorService } from "ngx-device-detector";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MobileGuard implements CanActivate {
  constructor(
    private deviceService: DeviceDetectorService,
    private route: Router
  ) {}

  canActivate(): boolean {
    if (this.deviceService.isMobile()) {
      this.route.navigate(["/mobile"]);
      return false;
    } else {
      return true;
    }
  }
}
