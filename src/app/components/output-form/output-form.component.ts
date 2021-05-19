import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-output-form',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.scss'],
})
export class OutputFormComponent {
  @Input() result: Result | undefined;
}
