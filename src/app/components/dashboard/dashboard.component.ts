import { QuestionSetService } from "./../../services/question_set/question-set.service";
import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public editCreateService: EditCreateService,
    public questionSetService: QuestionSetService
  ) {}

  ngOnInit() {
    this.questionSetService.getSets();
  }

  logout = () => this.authService.logout();
}
