import { LoadingEditDialog } from "./../../dialogs/loading-edit/loading-edit.component";
import { LoadingCreateDialog } from "../../dialogs/loading-create/loading-create.component";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  QuestionObj,
  QuestionSetObj,
  OptionObj
} from "src/app/models/objects/question_set.objects";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EditCreateService {
  edit_mode: boolean = false;

  question_set: QuestionSetObj;
  preview_questions: number[];

  max_options: number = 6;
  max_questions: number = 100;

  title_char_limits: number = 180;
  keyword_word_limits: number = 25;
  keyword_char_limits: number = 30;
  description_char_limits: number = 3000;
  question_char_limits: number = 120;
  option_char_limits: number = 180;

  constructor(
    private http: HttpClient,
    private route: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  initializeCreate = () => {
    this.edit_mode = false;

    this.question_set = {
      title: "",
      keywords: [],
      description: "",
      public: false,

      date_created: null,
      date_edited: null,

      leaderboard_time: 10,
      transition_time: 3,
      timed: true,

      questions: []
    };

    this.preview_questions = [];

    this.addQuestion();

    this.route.navigate(["/set"]);
  };

  initializeEdit = (question_set: QuestionSetObj) => {
    this.edit_mode = true;

    this.question_set = question_set;

    this.preview_questions = [];

    this.route.navigate(["/set"]);
  };

  uploadQuestionSet = () => {
    let dia = this.dialog.open(LoadingCreateDialog, { disableClose: true });

    this.verifyQuestionSet();

    this.question_set.date_created = Date.now();

    this.http
      .post("/api/user/question_sets", this.question_set)
      .subscribe(data =>
        // This flashes by too quickly... when platform gets bigger this may be less necessary
        setTimeout(() => {
          this.route.navigate(["/dashboard"]).then(() => {
            dia.close();
            this.snackbar.open(
              `Question set "${this.question_set.title}" created`,
              "Dismiss"
            );
          });
        }, 2000)
      );
  };

  editQuestionSet = () => {
    let dia = this.dialog.open(LoadingEditDialog, { disableClose: true });

    this.verifyQuestionSet();

    this.question_set.date_edited = Date.now();

    this.http
      .put(`/api/user/question_set/${this.question_set._id}`, this.question_set)
      .subscribe(data =>
        setTimeout(() => {
          this.route.navigate(["/dashboard"]).then(() => {
            dia.close();
            this.snackbar.open(
              `Question set "${this.question_set.title}" edited`,
              "Dismiss"
            );
          });
        }, 2000)
      );
  };

  private verifyQuestionSet = () => {
    if (this.question_set.title.length === 0)
      this.question_set.title = "[Untitled Set]";
  };

  getNewOption = () =>
    Object.create({ text: "", points: 0, correct: false }) as OptionObj;

  addQuestion = () => {
    let question: QuestionObj = {
      text: "",
      answer_time: 15,
      options: [
        { text: "", points: 1000, correct: true },
        this.getNewOption(),
        this.getNewOption(),
        this.getNewOption()
      ]
    };

    this.question_set.questions.push(question);
  };

  addPreviewQuestion = (question: QuestionObj) => {
    let { questions } = this.question_set;

    let question_index: number = questions.indexOf(question);

    if (!this.preview_questions.includes(question_index))
      this.preview_questions.push(question_index);
  };

  removePreviewQuestion = (question_index: number) => {
    if (this.preview_questions.includes(question_index)) {
      let index: number = this.preview_questions.indexOf(question_index);
      this.preview_questions.splice(index, 1);
    }
  };

  removeQuestion = (question: QuestionObj) => {
    let { questions } = this.question_set;
    let i: number = questions.indexOf(question);

    if (questions.length <= 1) return;

    this.removePreviewQuestion(i);
    questions.splice(i, 1);
  };

  addOptionToQuestion = (question: QuestionObj) => {
    if (question.options.length < this.max_options)
      question.options.push(this.getNewOption());
  };

  removeOptionFromQuestion = (question: QuestionObj, option: OptionObj) => {
    let { options } = question;

    if (options.length <= 2) return;

    let i: number = options.indexOf(option);
    options.splice(i, 1);
  };
}
