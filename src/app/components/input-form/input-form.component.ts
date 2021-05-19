import { Component, EventEmitter, Output } from '@angular/core';
import { Result } from 'src/app/models/result.model';
import { Sentence } from 'src/app/models/sentence.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  sentence: Sentence;
  @Output() sendResult = new EventEmitter<Result>();

  constructor() {
    this.sentence = new Sentence();
  }

  sentenceChanged() {
    this.sendResult.emit(this.getResult());
  }

  getResult(): Result {
    let result = new Result();
    if (
      this.sentence.text &&
      this.sentence.startIndex != null &&
      this.sentence.endIndex != null &&
      this.sentence.startIndex < this.sentence.endIndex &&
      this.sentence.color != null
    ) {
      let text = this.sentence.text;
      result.before = text.slice(0, this.sentence.startIndex);
      result.highlight = text.slice(
        this.sentence.startIndex,
        this.sentence.endIndex
      );
      result.after = text.slice(this.sentence.endIndex);
      result.color = this.sentence.color;
    } else {
      result.before = this.sentence.text;
    }
    return result;
  }
}
