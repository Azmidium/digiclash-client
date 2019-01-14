import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GameService {
  private player: boolean;
  private host: boolean;

  join_code: string;

  constructor(private http: HttpClient) {}

  // Getters
  isPlayer = () => this.player;
  isHost = () => this.host;

  // Setters
  setPlayer = (bool: boolean) => {
    this.player = bool;
    this.host = false;
  };
  setHost = (bool: boolean) => {
    this.host = bool;
    this.player = false;
  };

  // Public
  reset = () => {
    this.join_code = null;

    this.player = false;
    this.host = false;
  };

  isRealGame = (join_code: string) =>
    this.http
      .get(`/api/games/code/${join_code}`)
      .pipe(map(game => Object.keys(game).length !== 0));

  getJoinCode = () => this.join_code;
}
