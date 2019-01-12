import { GameObj } from "src/app/models/objects/game.objects";
import { QuestionSetObj } from "src/app/models/objects/question_set.objects";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HostService {
  game: GameObj;

  constructor(private http: HttpClient) {}

  hostGame = (question_set: QuestionSetObj) => {
    this.http
      .post("/api/game/create", question_set)
      .subscribe((data: { game: GameObj }) => {
        if (Object.keys(data.game).length === 0) return;

        this.game = data.game;
      });
  };
}
