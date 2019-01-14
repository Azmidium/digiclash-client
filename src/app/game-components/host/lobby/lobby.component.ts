import { HostService } from "./../../../services/host/host.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { PlatformLocation } from "@angular/common";

@Component({
  selector: "host-lobby",
  templateUrl: "./lobby.component.html",
  styleUrls: ["./lobby.component.scss"]
})
export class HostLobbyComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"])
  unloadHandler = () => this.hostService.end();

  constructor(public hostService: HostService, location: PlatformLocation) {
    location.onPopState(e => hostService.exit(e));
  }

  ngOnInit() {}
}
