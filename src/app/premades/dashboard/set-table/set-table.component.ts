import { HostService } from "./../../../services/host/host.service";
import { QuestionSetService } from "./../../../services/question_set/question-set.service";
import { QuestionSetObj } from "src/app/models/objects/question_set.objects";
import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "set-table",
  templateUrl: "./set-table.component.html",
  styleUrls: ["./set-table.component.scss"],
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class SetTableComponent {
  columns: string[] = ["title", "created", "edited", "questions", "visibility"];
  expandedSet: QuestionSetObj | null;

  constructor(
    public editCreateService: EditCreateService,
    public questionSetService: QuestionSetService,
    public hostService: HostService
  ) {}

  getDate = (date: number) =>
    date ? new Date(date).toLocaleDateString() : null;
}
