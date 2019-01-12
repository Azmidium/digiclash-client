import { QuestionObj } from "src/app/models/objects/question_set.objects";
import { Component, Input, ViewChild } from "@angular/core";
import { MatMenu } from "@angular/material";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "menu-create",
  templateUrl: "./menu-create.component.html",
  styleUrls: ["./menu-create.component.scss"]
})
export class MenuCreateComponent {
  @ViewChild("menu") matMenu: MatMenu;
  @Input() question: QuestionObj;

  constructor(public editCreateService: EditCreateService) {}
}
