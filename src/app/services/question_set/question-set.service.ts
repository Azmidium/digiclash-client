import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { QuestionSetObj } from "src/app/models/objects/question_set.objects";
import { MatSnackBar, MatTable } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class QuestionSetService {
  question_sets: QuestionSetObj[];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getSets = () => {
    this.http
      .get("/api/user/question_sets")
      .subscribe(
        (question_sets: QuestionSetObj[]) =>
          (this.question_sets = question_sets)
      );
  };

  removeQuestionSet = (question_set: QuestionSetObj, table: MatTable<any>) => {
    let index: number = this.question_sets.indexOf(question_set);

    this.question_sets.splice(index, 1);

    this.http
      .delete(`/api/user/question_set/${question_set._id}`)
      .subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.question_sets.splice(index, 0, question_set);
          this.snackbar.open(
            "An error has occured with deleting this question set...",
            "Dimiss"
          );
        } else {
          this.snackbar.open(
            `Question set "${question_set.title}" removed`,
            "Dismiss"
          );
        }

        table.renderRows();
      });
  };
}
