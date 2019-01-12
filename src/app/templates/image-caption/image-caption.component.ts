import { Component, Input } from "@angular/core";

@Component({
  selector: "image-caption",
  templateUrl: "./image-caption.component.html",
  styleUrls: ["./image-caption.component.scss"]
})
export class ImageCaptionComponent {
  @Input() src: string;
  @Input() alt: string;

  @Input() dimension: number;
}
