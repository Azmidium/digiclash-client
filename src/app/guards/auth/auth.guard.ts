import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, first, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient, private route: Router) {}

  canActivate(): Observable<boolean> {
    return this.http.get("/auth/user").pipe(
      first(),
      map(user => Object.keys(user).length !== 0),
      tap(auth => {
        if (!auth) this.route.navigate(["/login"]);
      })
    );
  }
}
