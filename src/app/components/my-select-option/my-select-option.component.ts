import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ValueDTO } from './../../models/value-dto';

@Component({
  selector: 'my-select-option',
  templateUrl: './my-select-option.component.html',
  styleUrls: ['./my-select-option.component.scss'],
})
export class MySelectOptionComponent implements AfterViewInit {
  @ViewChild('selectWrap')
  selectWrap: ElementRef | undefined;

  @ViewChild('defaultOption')
  defaultOption: ElementRef | undefined;

  @ViewChildren('selectLine') selectLines: QueryList<ElementRef> | undefined;

  @Input() placeholder: string | undefined;
  @Input() values: ValueDTO[] | undefined;

  @Output() sendSelectedValue = new EventEmitter<ValueDTO>();

  selectedValue: ValueDTO = new ValueDTO();

  constructor() {}

  selectValue(value?: ValueDTO) {
    this.selectedValue = value ? value : new ValueDTO();
    this.sendSelectedValue.emit(this.selectedValue);
  }

  ngAfterViewInit() {
    this.defaultOption!.nativeElement.addEventListener(
      'click',
      this.defaultOptionClicked.bind(this)
    );

    this.selectLines!.forEach((line) => {
      line.nativeElement.addEventListener(
        'click',
        this.selectLineClicked.bind(this)
      );
    });

    document.addEventListener('click', (evt) => {
      const flyoutElement = this.selectWrap?.nativeElement;
      let targetElement = evt.target; // clicked element

      do {
        if (targetElement == flyoutElement) {
          // Do nothing, just return.
          return;
        }
        // Go up the DOM.
        targetElement = (<HTMLElement>targetElement).parentNode;
      } while (targetElement);
      this.selectLineClicked();
    });
  }

  defaultOptionClicked(): void {
    const select_wrap = this.defaultOption!.nativeElement.parentElement;
    let classes: string = select_wrap.className;
    if (classes.endsWith('active')) {
      select_wrap.className = 'select_wrap';
    } else {
      select_wrap.className += ' active';
    }
  }

  selectLineClicked(): void {
    const select_wrap = this.defaultOption!.nativeElement.parentElement;
    let classes: string = select_wrap.className;
    if (classes.endsWith('active')) {
      select_wrap.className = 'select_wrap';
    }
  }
}
