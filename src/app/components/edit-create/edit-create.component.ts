import { Component } from "@angular/core";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";
import { Router } from "@angular/router";
@Component({
  selector: "edit-create",
  templateUrl: "./edit-create.component.html",
  styleUrls: ["./edit-create.component.scss"]
})
export class EditCreateComponent {
  constructor(
    public editCreateService: EditCreateService,
    private route: Router
  ) {}

  goToDashboard = () => this.route.navigate(["/dashboard"]);
}
