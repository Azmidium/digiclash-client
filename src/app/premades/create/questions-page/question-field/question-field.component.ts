import { Component, Input } from "@angular/core";
import { QuestionObj } from "../../../../models/objects/question_set.objects";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "question-field",
  templateUrl: "./question-field.component.html",
  styleUrls: ["./question-field.component.scss"]
})
export class QuestionFieldComponent {
  @Input() question: QuestionObj;
  @Input() index: number;

  constructor(public editCreateService: EditCreateService) {}
}
