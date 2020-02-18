import { Component } from '@angular/core';
import {ExameService} from "./service/exame.service";
import {Observable} from "rxjs";
import {ExameBase} from "./model/exame-base.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  exames$: Observable<ExameBase<any>[]>;

  constructor(exameService: ExameService) {
    this.exames$ = exameService.getExames();
  }

}
