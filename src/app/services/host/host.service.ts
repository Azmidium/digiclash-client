import { GameObj } from "src/app/models/objects/game.objects";
import { QuestionSetObj } from "src/app/models/objects/question_set.objects";
import { HttpClient } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import io from "socket.io-client";
import { GameState } from "src/app/models/enums/game_state.enum";
import { Router } from "@angular/router";
import { GameService } from "../game/game.service";

@Injectable({
  providedIn: "root"
})
export class HostService {
  socket;

  game: GameObj;

  countdown: number;

  constructor(
    private gameService: GameService,
    private http: HttpClient,
    private route: Router,
    private zone: NgZone
  ) {}

  exit = e => {
    let confirmed: boolean;
    confirmed = window.confirm("Are you sure you want to end this game?");
    if (e && confirmed) this.end();
    if (e && !confirmed) e.preventDefault();
  };

  // Methods
  host = (question_set: QuestionSetObj) => {
    this.http
      .post("/api/game/create", question_set)
      .subscribe((data: { game: GameObj }) => {
        if (Object.keys(data.game).length === 0) return;

        this.game = data.game;

        this.socket = io("/api/game");

        this.connect();
        this.initEvents();

        this.gameService.setHost(true);
        this.gameService.join_code = this.getJoinCode();

        this.routeEnum();
      });
  };

  start = () => this.socket.emit("start");

  // Handling Socket Connections
  connect = () => {
    this.socket.emit("join-host", this.getJoinCode());
    this.socket.emit("join-game", this.getJoinCode());
  };

  initEvents = () => {
    this.socket.on("countdown", num => (this.countdown = Number(num)));
    this.socket.on("game", (game: GameObj) =>
      this.zone.run(() => {
        let initial_state: GameState = this.getInfo().game_state;

        this.game = game;

        if (initial_state !== this.getInfo().game_state) this.routeEnum();
      })
    );
    // this.socket.on("disconnect", this.end());
  };

  // Private Methods
  private routeEnum = () => {
    switch (this.getInfo().game_state) {
      case GameState.LOBBY: {
        this.route.navigate(["/host-lobby"]);
        break;
      }
      case GameState.TRANSITION: {
        this.route.navigate(["/host-transition"]);
        break;
      }
      case GameState.QUESTION: {
        this.route.navigate(["/host-question"]);
        break;
      }
      case GameState.SHOW_ANSWER: {
        this.route.navigate(["/host-answer"]);
        break;
      }
      case GameState.LEADERBOARD: {
        this.route.navigate(["/host-leaderboard"]);
        break;
      }
      case GameState.FINISH: {
        this.route.navigate(["/host-finish"]);
        break;
      }
      default: {
        break;
      }
    }
  };

  end = () => {
    this.socket.emit("end");
    this.gameService.reset();
    this.route.navigate(["/dashboard"]);
  };

  // Getters

  private getGame = () => this.game;

  private getInfo = () => this.getGame().info;
  private getPlayers = () => this.getGame().players;
  private getSet = () => this.getGame().question_set;

  private getJoinCode = () => this.getInfo().join_code.toString();
}
