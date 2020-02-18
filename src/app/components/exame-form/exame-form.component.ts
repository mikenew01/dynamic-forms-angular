import {Component, Input, OnInit} from '@angular/core';
import {ExameBase} from "../../model/exame-base.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exame-form',
  templateUrl: './exame-form.component.html',
  styleUrls: ['./exame-form.component.scss']
})
export class ExameFormComponent implements OnInit {

  @Input() exame: ExameBase<string>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.exame.key].valid;
  }

}
