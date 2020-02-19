import { Component } from '@angular/core';
import {ExameService} from "./service/exame.service";
import {Observable} from "rxjs";
import {Campo} from "./model/campo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  exames$: Observable<Campo<any>[]>;

  constructor(exameService: ExameService) {
    this.exames$ = exameService.getExames();
  }

}
