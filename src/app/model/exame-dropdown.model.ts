import {ExameBase} from "./exame-base.model";

export class ExameDropdown extends ExameBase<string> {

  options: {
    key: string,
    value: string
  }[] = [];

  constructor(options: {} = {}) {
    super(options);

    this.options = options['options'] || [];
  }

}
