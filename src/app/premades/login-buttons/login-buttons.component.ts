import { Component } from "@angular/core";

import { AuthService } from "./../../services/auth/auth.service";

@Component({
  selector: "login-buttons",
  templateUrl: "./login-buttons.component.html",
  styleUrls: ["./login-buttons.component.scss"]
})
export class LoginButtonsComponent {
  constructor(private authService: AuthService) {}

  loginFacebook = () => this.authService.loginFacebook();
  loginGoogle = () => this.authService.loginGoogle();
}
