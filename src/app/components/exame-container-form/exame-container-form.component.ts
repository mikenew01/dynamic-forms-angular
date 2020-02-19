import {Component, Input, OnInit} from '@angular/core';
import {ExameService} from "../../service/exame.service";
import {Campo} from "../../model/campo.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exame-container-form',
  templateUrl: './exame-container-form.component.html',
  styleUrls: ['./exame-container-form.component.scss']
})
export class ExameContainerFormComponent implements OnInit {

  @Input() exames: Campo<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private exameService: ExameService) { }

  ngOnInit() {
    this.form = this.exameService.toFromGroup(this.exames);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
