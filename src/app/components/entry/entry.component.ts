import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, QuestionType } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  @Input() data!: Question[];
  @Output() done = new EventEmitter<boolean>();

  public types = Object.values(QuestionType);
  public QuestionType = QuestionType;

  constructor() {}

  public onDone(value: boolean): void {
    this.done.emit(value);
  }
}
