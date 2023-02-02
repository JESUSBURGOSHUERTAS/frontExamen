import { Especies } from './especies';
export class Razas {
  idraza?: any;
  nombreRaza: string;
  especies: Especies;


  constructor(nombreRaza: string, especies: Especies) {
      this.nombreRaza = nombreRaza;
      this.especies = especies;

  }
}
