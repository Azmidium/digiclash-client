import { QuestionSetObj } from "src/app/models/objects/question_set.objects";
import { HttpClient } from "@angular/common/http";
import { GameInfoObj, UserObj } from "src/app/models/objects/game.objects";
import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { map } from "rxjs/operators";

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
  server: io.Server;

  game_info: GameInfoObj;
  user: UserObj;
  question_set: QuestionSetObj;

  countdown: number;

  constructor(private http: HttpClient) {}

  isRealGame = (join_code: string) => {
    return this.http
      .get(`/api/games/code/${join_code}`)
      .pipe(map(game => !!game));
  };

  joinGame = (join_code: string, display_name: string) => {
    this.http
      .get(`/api/game/join/${join_code}/${display_name}`)
      .subscribe(
        (data: { user: UserObj; info: GameInfoObj; set: QuestionSetObj }) => {
          if (Object.keys(data).length === 0) return;

          this.game_info = data.info;
          this.user = data.user;
          this.question_set = data.set;

          this.server = io("/api/game");

          this.connectToGameEvents();
          this.connectToUserEvents();
        }
      );
  };

  connectToGameEvents = () => {
    this.server.to(this.getJoinCode()).on("connection", socket => {
      socket.on("countdown", num => (this.countdown = Number(num)));
      socket.on("game", info => (this.game_info = info));
      socket.on("end", () => {});
    });
  };

  connectToUserEvents = () => {
    this.server
      .to(this.getJoinCode())
      .to(this.getUserID())
      .on("connection", socket =>
        socket.on("user", user => (this.user = user))
      );
  };

  sendAnswer = () => {};

  private getJoinCode = () => this.game_info.join_code.toString();

  private getUserID = () => this.user.id.toString();
}
