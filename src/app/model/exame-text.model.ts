import {ExameBase} from "./exame-base.model";

export class ExameText extends ExameBase<string> {

  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }

}
