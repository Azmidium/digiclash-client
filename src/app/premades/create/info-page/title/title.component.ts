import { EditCreateService } from "./../../../../services/edit-create/edit-create.service";
import { Component } from "@angular/core";

@Component({
  selector: "title-field",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent {
  constructor(public editCreateService: EditCreateService) {}
}
