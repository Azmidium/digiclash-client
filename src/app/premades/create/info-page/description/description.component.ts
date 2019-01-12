import { Component } from "@angular/core";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "description-field",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.scss"]
})
export class DescriptionComponent {
  constructor(public editCreateService: EditCreateService) {}
}
