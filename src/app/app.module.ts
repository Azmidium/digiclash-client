import { HostGuard } from "./guards/host/host.guard";
import { HostService } from "./services/host/host.service";
import { QuestionSetService } from "./services/question_set/question-set.service";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EditCreateComponent } from "./components/edit-create/edit-create.component";

import { CharLimitComponent } from "./premades/char-limit/char-limit.component";
import { CompTabDisplayComponent } from "./premades/comp-tab-display/comp-tab-display.component";
import { JoinComponent } from "./premades/join/join.component";
import { LoginButtonsComponent } from "./premades/login-buttons/login-buttons.component";

import { DescriptionComponent } from "./premades/create/info-page/description/description.component";
import { InfoComponent } from "./premades/create/info-page/info/info.component";
import { KeywordComponent } from "./premades/create/info-page/keyword/keyword.component";
import { KeywordCounterComponent } from "./premades/create/info-page/keyword-counter/keyword-counter.component";
import { TitleComponent } from "./premades/create/info-page/title/title.component";

import { AnswerSliderComponent } from "./premades/create/questions-page/answer-slider/answer-slider.component";
import { OptionComponent } from "./premades/create/questions-page/option/option.component";
import { PointSliderComponent } from "./premades/create/questions-page/point-slider/point-slider.component";
import { QuestionComponent } from "./premades/create/questions-page/question/question.component";
import { QuestionFieldComponent } from "./premades/create/questions-page/question-field/question-field.component";

import { SettingsComponent } from "./premades/create/settings-page/settings/settings.component";

import { BooleanTogglerComponent } from "./templates/boolean-toggler/boolean-toggler.component";
import { ImageCaptionComponent } from "./templates/image-caption/image-caption.component";
import { ImgIconComponent } from "./templates/img-icon/img-icon.component";
import { OneFieldFormComponent } from "./templates/one-field-form/one-field-form.component";

import { MenuCreateComponent } from "./menus/menu-create/menu-create.component";

import { MobileComponent } from "./components/mobile/mobile.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

import { BrowserModule } from "@angular/platform-browser";
import { RoutingModule } from "./modules/routing.module";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DeviceDetectorModule } from "ngx-device-detector";

import { MaterialModule } from "./modules/material.module";
import { CdkModule } from "./modules/cdk.module";

import { ChartsModule } from "ng2-charts";

import { HttpClientModule } from "@angular/common/http";

import { PlayerService } from "./services/player/player.service";
import { AuthService } from "./services/auth/auth.service";
import { EditCreateService } from "./services/edit-create/edit-create.service";

import { AuthGuard } from "./guards/auth/auth.guard";
import { AnonGuard } from "./guards/anon/anon.guard";
import { MobileGuard } from "./guards/mobile/mobile.guard";

import "hammerjs";
import { LeaderboardSliderComponent } from "./premades/create/settings-page/leaderboard-slider/leaderboard-slider.component";
import { TransitionSliderComponent } from "./premades/create/settings-page/transition-slider/transition-slider.component";
import { LoadingCreateDialog } from "./dialogs/loading-create/loading-create.component";
import { SetTableComponent } from "./premades/dashboard/set-table/set-table.component";
import { LoadingEditDialog } from "./dialogs/loading-edit/loading-edit.component";
import { HostLobbyComponent } from "./game-components/host/lobby/lobby.component";
import { HostTransitionComponent } from "./game-components/host/transition/transition.component";
import { HostQuestionComponent } from "./game-components/host/question/question.component";
import { HostAnswerComponent } from "./game-components/host/answer/answer.component";
import { HostLeaderboardComponent } from "./game-components/host/leaderboard/leaderboard.component";
import { HostFinishComponent } from "./game-components/host/finish/finish.component";
import { PlayerConnectedComponent } from "./game-components/player/connected/connected.component";
import { PlayerTransitionComponent } from "./game-components/player/transition/transition.component";
import { PlayerAnswerComponent } from "./game-components/player/answer/answer.component";
import { PlayerShowAnswerComponent } from "./game-components/player/show-answer/show-answer.component";
import { PlayerStatsComponent } from "./game-components/player/stats/stats.component";
import { PlayerFeedbackComponent } from "./game-components/player/feedback/feedback.component";
import { GameService } from "./services/game/game.service";
import { PlayerGuard } from "./guards/player/player.guard";
import { NameComponent } from './components/name/name.component';
import { DisplayNameComponent } from './premades/display-name/display-name.component';
import { PlayerListComponent } from './premades/host/lobby/player-list/player-list.component';

@NgModule({
  declarations: [
    // Pages
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    EditCreateComponent,

    // Premades
    CharLimitComponent,
    CompTabDisplayComponent,
    JoinComponent,
    LoginButtonsComponent,

    // Premades: Create --> Info
    DescriptionComponent,
    InfoComponent,
    KeywordComponent,
    KeywordCounterComponent,
    TitleComponent,

    // Premades: Create --> Questions
    AnswerSliderComponent,
    OptionComponent,
    PointSliderComponent,
    QuestionComponent,
    QuestionFieldComponent,

    // Premades: Create --> Settings
    SettingsComponent,

    // Premades: Dashboard --> My Question Sets
    SetTableComponent,

    // Templates
    BooleanTogglerComponent,
    ImageCaptionComponent,
    ImgIconComponent,
    OneFieldFormComponent,

    // Menus
    MenuCreateComponent,

    // Dialogs
    LoadingCreateDialog,
    LoadingEditDialog,

    // Error Screens
    MobileComponent,
    NotFoundComponent,
    LeaderboardSliderComponent,
    TransitionSliderComponent,

    // Host Screens
    HostLobbyComponent,
    HostTransitionComponent,
    HostQuestionComponent,
    HostAnswerComponent,
    HostLeaderboardComponent,
    HostFinishComponent,

    // Player Screens
    PlayerConnectedComponent,
    PlayerTransitionComponent,
    PlayerAnswerComponent,
    PlayerShowAnswerComponent,
    PlayerStatsComponent,
    PlayerFeedbackComponent,
    NameComponent,
    DisplayNameComponent,
    PlayerListComponent
  ],
  imports: [
    // Core modules
    BrowserModule,
    RoutingModule,
    FormsModule,

    BrowserAnimationsModule,

    DeviceDetectorModule.forRoot(),

    // Material
    MaterialModule,
    CdkModule,

    // Charts
    ChartsModule,

    // Http
    HttpClientModule
  ],
  providers: [
    //Services
    AuthService,
    EditCreateService,
    QuestionSetService,
    PlayerService,
    HostService,
    GameService,

    // Guards
    AuthGuard,
    AnonGuard,
    MobileGuard,
    PlayerGuard,
    HostGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoadingCreateDialog, LoadingEditDialog],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
