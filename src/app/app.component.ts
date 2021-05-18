import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sentence: string = '';
  startIndex: number = 0;
  endIndex: number = 0;
  color: string | undefined;

  constructor(protected sanitizer: DomSanitizer) {}

  getResult(): any {
    if (this.sentence.length === 0) {
      return '';
    }

    if (this.startIndex >= this.endIndex) {
      return this.sentence;
    }

    if (this.color == null) {
      return this.sentence;
    }

    console.log('sentence: ', this.sentence);
    console.log('length: ', this.sentence.length);

    let result = '';
    result += this.sentence.slice(0, this.startIndex);
    console.log('result 1: ', result);
    result +=
      '<span style="color:' +
      this.color +
      '">' +
      this.sentence.slice(this.startIndex, this.endIndex) +
      '</span>';
    result += this.sentence.slice(this.endIndex);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  showOutput(event: any) {
    console.log('event: ', event);
  }
}
