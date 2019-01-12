import { Component, Input } from "@angular/core";

@Component({
  selector: "keyword-counter",
  templateUrl: "./keyword-counter.component.html",
  styleUrls: ["./keyword-counter.component.scss"]
})
export class KeywordCounterComponent {
  @Input() keywords: string[];

  @Input() max: number;
  @Input() warn: number;
  @Input() danger: number;

  constructor() {}

  keywordsLeft = () => this.max - this.keywords.length || 0;
}
