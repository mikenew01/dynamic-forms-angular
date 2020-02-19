import {Injectable} from '@angular/core';
import {Campo} from "../model/campo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor() {
  }

  toFromGroup(exames: Campo<string>[]) {
    let group: any = {};

    exames.forEach(obj => {
      group[obj.key] = new FormControl(obj.value || '', this.toValidation(obj.validations) || []);
    });


    return new FormGroup(group);
  }

  private toValidation(validationObject: { validation: string, value?: any }[] = []): any {
    return validationObject.map(validation => {
      switch (validation.validation) {
        case 'min': return Validators.min(validation.value as number);
        case 'max': return Validators.max(validation.value as number);
        case 'required': return Validators.required;
        case 'email': return Validators.email;
        case 'minLength': return Validators.minLength(validation.value as number);
        case 'maxLength': return Validators.maxLength(validation.value as number);
      }
    });
  }

  getExames() {
    let exames: Campo<string>[] = [
      new Campo({
        controlType: 'text',
        key: 'emailPessoa',
        value: 'maikoncanuto@gmail.com',
        label: 'E-mail',
        type: 'email',
        placeholder: 'maikoncanuto@gmail.com',
        validations: [
          {validation: 'email', message: 'Campo inválido, precisa digitar e-mail'},
          {validation: 'minLength', value: 3, message: 'Necessário preencher o campo.'},
          {validation: 'maxLength', value: 4, message: 'Caracters máximos 2'},
        ],
        order: 2
      }),

      new Campo({
        controlType: 'text',
        key: 'nome',
        label: 'Nome Completo',
        type: 'text',
        placeholder: 'Maikon Canuto',
        order: 1
      }),

      new Campo({
        controlType: 'dropdown',
        key: 'sexo',
        label: 'Sexo',
        type: 'dropdown',
        placeholder: 'Selecione o Sexo',
        order: 3,
        options: [
          {key: 'Homem', value: 'M'},
          {key: 'Mulher', value: 'F'}
        ]
      }),
    ];

    return of(exames.sort((a, b) => a.order - b.order));
  }


}
