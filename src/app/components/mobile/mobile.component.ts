import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.scss"]
})
export class MobileComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goHome = () => this.route.navigate(["/"]);
}
