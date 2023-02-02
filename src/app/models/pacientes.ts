import { Razas } from './razas';
import { Duenos } from './duenos';
export class Pacientes {
  idpaciente?: any;
  nombre: string;
  raza: Razas;
  fechaNacimiento: Date;
  dueno: Duenos;

  constructor(nombre: string, raza: Razas, fechaNacimiento: Date, dueno: Duenos) {
      this.nombre = nombre;
      this.raza = raza;
      this.fechaNacimiento=fechaNacimiento;
      this.dueno=dueno;

  }
}
