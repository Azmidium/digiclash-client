import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private height: number = 600;
  private width: number = 400;

  constructor(private http: HttpClient, private route: Router) {}

  loginFacebook = () =>
    this.login("/auth/facebook", "Digiclash Login - Facebook");
  loginGoogle = () => this.login("/auth/google", "Digiclash Login - Google");

  logout = () =>
    this.http
      .get("/auth/logout")
      .subscribe(obj => this.route.navigate(["/login"]));

  private login = (link: string, title: string) => {
    let win = window.open(
      link,
      title,
      `height=${this.height}, width=${this.width}`
    );

    let timer = window.setInterval(() => {
      if (win.closed !== false) {
        window.clearInterval(timer);
        this.route.navigate(["/dashboard"]);
      }
    });
  };
}
