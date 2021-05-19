import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Result } from './models/result.model';
import { Sentence } from './models/sentence.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result: Result | undefined;

  getResult(result: Result): void {
    this.result = result;
  }
}
