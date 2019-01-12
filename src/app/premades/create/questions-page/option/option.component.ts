import { EditCreateService } from "./../../../../services/edit-create/edit-create.service";
import {
  QuestionObj,
  OptionObj
} from "src/app/models/objects/question_set.objects";
import { Component, Input } from "@angular/core";

@Component({
  selector: "option-main",
  templateUrl: "./option.component.html",
  styleUrls: ["./option.component.scss"]
})
export class OptionComponent {
  @Input() question: QuestionObj;
  @Input() option: OptionObj;
  @Input() index: number;

  constructor(public editCreateService: EditCreateService) {}

  toggleCorrect = () => (this.option.correct = !this.option.correct);

  points_change = $event => {
    if (!isNaN(Number($event))) this.option.points = $event;
  };
}
