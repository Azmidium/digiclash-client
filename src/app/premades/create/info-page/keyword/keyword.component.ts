import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { MatChipInputEvent } from "@angular/material";
import { EditCreateService } from "src/app/services/edit-create/edit-create.service";

@Component({
  selector: "keyword-field",
  templateUrl: "./keyword.component.html",
  styleUrls: ["./keyword.component.scss"]
})
export class KeywordComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(public editCreateService: EditCreateService) {}

  add = (event: MatChipInputEvent) => {
    const { keywords } = this.editCreateService.question_set;
    const { keyword_char_limits } = this.editCreateService;

    const input = event.input;
    const value = event.value;

    if (!this.checkAdd(value)) return;

    if (value.trim().length > keyword_char_limits)
      return (input.value = value.substring(0, keyword_char_limits));

    if ((value || "").trim()) keywords.push(value.trim());

    if (input) input.value = "";
  };

  checkAdd(value: string) {
    const { keywords } = this.editCreateService.question_set;

    if (keywords.includes(value.trim())) return false;
    if (keywords.length >= this.editCreateService.keyword_word_limits)
      return false;

    return true;
  }

  remove = (keyword: string) => {
    const { keywords } = this.editCreateService.question_set;
    const index = keywords.indexOf(keyword);

    if (index >= 0) keywords.splice(index, 1);
  };
}
