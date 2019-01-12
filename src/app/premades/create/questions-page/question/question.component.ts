import { EditCreateService } from "src/app/services/edit-create/edit-create.service";
import { Component, Input } from "@angular/core";
import { QuestionObj } from "../../../../models/objects/question_set.objects";

@Component({
  selector: "question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent {
  @Input() question: QuestionObj;
  @Input() index: number;

  constructor(public editCreateService: EditCreateService) {}

  answer_change = $event => {
    if (!isNaN(Number($event))) this.question.answer_time = $event;
  };
}
