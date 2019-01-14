import { HostGuard } from "./../guards/host/host.guard";
import { HostFinishComponent } from "./../game-components/host/finish/finish.component";
import { HostLeaderboardComponent } from "./../game-components/host/leaderboard/leaderboard.component";
import { HostAnswerComponent } from "./../game-components/host/answer/answer.component";
import { HostQuestionComponent } from "./../game-components/host/question/question.component";
import { HostTransitionComponent } from "./../game-components/host/transition/transition.component";
import { HostLobbyComponent } from "./../game-components/host/lobby/lobby.component";
import { EditCreateComponent } from "./../components/edit-create/edit-create.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./../components/login/login.component";
import { DashboardComponent } from "./../components/dashboard/dashboard.component";
import { MobileComponent } from "./../components/mobile/mobile.component";
import { HomeComponent } from "./../components/home/home.component";

import { AnonGuard } from "../guards/anon/anon.guard";
import { AuthGuard } from "../guards/auth/auth.guard";
import { MobileGuard } from "./../guards/mobile/mobile.guard";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { PlayerConnectedComponent } from "../game-components/player/connected/connected.component";
import { PlayerGuard } from "../guards/player/player.guard";
import { PlayerTransitionComponent } from "../game-components/player/transition/transition.component";
import { PlayerAnswerComponent } from "../game-components/player/answer/answer.component";
import { PlayerShowAnswerComponent } from "../game-components/player/show-answer/show-answer.component";
import { PlayerStatsComponent } from "../game-components/player/stats/stats.component";
import { PlayerFeedbackComponent } from "../game-components/player/feedback/feedback.component";
import { NameComponent } from "../components/name/name.component";

const main_routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AnonGuard, MobileGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard, MobileGuard]
  },
  {
    path: "set",
    component: EditCreateComponent,
    canActivate: [AuthGuard, MobileGuard]
  },
  { path: "mobile", component: MobileComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

const player_routes: Routes = [
  // Select a display name
  {
    path: "name",
    component: NameComponent,
    canActivate: [PlayerGuard]
  },

  // Game routes
  {
    path: "player-connected",
    component: PlayerConnectedComponent,
    canActivate: [PlayerGuard]
  },
  {
    path: "player-transition",
    component: PlayerTransitionComponent,
    canActivate: [PlayerGuard]
  },
  {
    path: "player-answer",
    component: PlayerAnswerComponent,
    canActivate: [PlayerGuard]
  },
  {
    path: "player-show-answer",
    component: PlayerShowAnswerComponent,
    canActivate: [PlayerGuard]
  },
  {
    path: "player-stats",
    component: PlayerStatsComponent,
    canActivate: [PlayerGuard]
  },
  {
    path: "player-feedback",
    component: PlayerFeedbackComponent,
    canActivate: [PlayerGuard]
  }
];

const host_routes: Routes = [
  {
    path: "host-lobby",
    component: HostLobbyComponent,
    canActivate: [HostGuard, AuthGuard, MobileGuard]
  },
  {
    path: "host-transition",
    component: HostTransitionComponent,
    canActivate: [HostGuard, AuthGuard, MobileGuard]
  },
  {
    path: "host-question",
    component: HostQuestionComponent,
    canActivate: [HostGuard, AuthGuard, MobileGuard]
  },
  {
    path: "host-answer",
    component: HostAnswerComponent,
    canActivate: [HostGuard, AuthGuard, MobileGuard]
  },
  {
    path: "host-leaderboard",
    component: HostLeaderboardComponent,
    canActivate: [HostGuard, AuthGuard, MobileGuard]
  },
  {
    path: "host-finish",
    component: HostFinishComponent,
    canActivate: [HostGuard, AuthGuard, MobileGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([...player_routes, ...host_routes, ...main_routes])
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
