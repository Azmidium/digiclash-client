import { Component, Input } from "@angular/core";

@Component({
  selector: "img-icon",
  templateUrl: "./img-icon.component.html",
  styleUrls: ["./img-icon.component.scss"]
})
export class ImgIconComponent {
  @Input() src: string;
  @Input() alt: string;
}
