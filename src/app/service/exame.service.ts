import { Injectable } from '@angular/core';
import {ExameBase} from "../model/exame-base.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";
import {ExameDropdown} from "../model/exame-dropdown.model";
import {ExameText} from "../model/exame-text.model";

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor() { }

  toFromGroup(exames: ExameBase<string>[]) {
    let group: any = {};

    exames.forEach(obj => {
      group[obj.key] = new FormControl(obj.value || '', []);
    });

    return new FormGroup(group);
  }

  getExames() {
    let exames: ExameBase<string>[] = [
      new ExameDropdown({
        key: 'veiculo',
        label: 'Tipo Veiculo',
        controlType: 'dropdown',
        options: [
          {order: 1, key: 'Componente', value: 'componente'},
          {order: 2, key: 'Programa', value: 'programa'}
        ],
        order: 3
      }),

      new ExameText({
        controlType: 'text',
        key: 'emailPessoa',
        label: 'E-mail',
        type: 'email',
        order: 1
      }),

      new ExameText({
        controlType: 'text',
        key: 'nome',
        label: 'Nome Completo',
        type: 'text',
        order: 2
      })
    ];

    return of(exames.sort((a, b) => a.order - b.order));
  }


}
