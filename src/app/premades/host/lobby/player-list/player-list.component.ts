import { HostService } from "./../../../../services/host/host.service";
import { Component } from "@angular/core";

@Component({
  selector: "player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.scss"]
})
export class PlayerListComponent {
  constructor(public hostService: HostService) {}
}
