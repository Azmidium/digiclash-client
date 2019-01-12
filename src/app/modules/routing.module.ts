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

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
