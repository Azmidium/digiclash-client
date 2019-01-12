import { Component } from "@angular/core";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent {
  constructor(public editCreateService: EditCreateService) {}
}
