import { Component, Input, OnInit } from '@angular/core';
import { Question, QuestionType } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  @Input() data!: Question[];
  public types = Object.values(QuestionType);
  public QuestionType = QuestionType;

  constructor() {}
}
