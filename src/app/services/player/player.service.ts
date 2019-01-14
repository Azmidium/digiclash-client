import { QuestionSetObj } from "src/app/models/objects/question_set.objects";
import { HttpClient } from "@angular/common/http";
import { GameInfoObj, UserObj } from "src/app/models/objects/game.objects";
import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { GameState } from "src/app/models/enums/game_state.enum";
import { Router } from "@angular/router";
import { GameService } from "../game/game.service";

/* 
Events Out:
- countdown
- game
- user (in join code room, on user id)
- end

Events In:
- connection
- start
- answer
- disconnect
*/

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  socket;

  game_info: GameInfoObj;
  user: UserObj;
  question_set: QuestionSetObj;

  constructor(
    private http: HttpClient,
    private route: Router,
    private gameService: GameService
  ) {}

  // Methods
  joinGame = (join_code: string, display_name: string) =>
    this.http
      .get(`/api/game/join/${join_code}/${display_name}`)
      .subscribe(
        (data: { user: UserObj; info: GameInfoObj; set: QuestionSetObj }) => {
          if (Object.keys(data).length === 0) return this.route.navigate(["/"]);

          this.game_info = data.info;
          this.user = data.user;
          this.question_set = data.set;

          this.socket = io("/api/game");

          this.connect();
          this.initEvents();

          this.routeEnum();
        }
      );

  sendAnswer = () => {};

  leave = () => {
    this.socket.emit("leave");
    this.gameService.reset();
    this.route.navigate(["/"]);
  };

  // Handling Socket Connections
  connect = () => {
    this.socket.emit("join-game", this.getJoinCode());
    this.socket.emit("join-user", {
      code: this.getJoinCode(),
      user_id: this.getUserID()
    });
  };

  initEvents = () => {
    this.socket.on("info", info => {
      let initial_state: GameState = this.getInfo().game_state;
      this.game_info = info;

      if (initial_state !== this.getInfo().game_state) this.routeEnum();
    });
    this.socket.on("user", user => (this.user = user));
    this.socket.on("disconnect", () => this.leave());
  };

  // Private Methods

  private routeEnum = () => {
    switch (this.getInfo().game_state) {
      case GameState.LOBBY: {
        this.route.navigate(["/player-connected"]);
        break;
      }
      case GameState.TRANSITION: {
        this.route.navigate(["/player-transition"]);
        break;
      }
      case GameState.QUESTION: {
        this.route.navigate(["/player-answer"]);
        break;
      }
      case GameState.SHOW_ANSWER: {
        this.route.navigate(["/player-show-answer"]);
        break;
      }
      case GameState.LEADERBOARD: {
        this.route.navigate(["/player-stats"]);
        break;
      }
      case GameState.FINISH: {
        this.route.navigate(["/player-feedback"]);
        break;
      }
      default: {
        break;
      }
    }
  };

  // Getters
  private getJoinCode = () =>
    this.getInfo().join_code.toString() || this.gameService.getJoinCode();

  private getUserID = () => this.user.id.toString();

  private getInfo = () => this.game_info;
  private getSet = () => this.question_set;
}
