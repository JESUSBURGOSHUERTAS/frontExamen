export class Duenos {
  idDueno?: any;
  nombre: string;
  tipoIdentificacion: string;
  identificacion: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  fechaRegistro: Date;

  constructor(nombre: string, tipoIdentificacion: string, identificacion: string, ciudad: string,
    direccion: string, telefono: string, fechaRegistro: Date) {
      this.nombre = nombre;
      this.tipoIdentificacion=tipoIdentificacion;
      this.identificacion=identificacion;
      this.ciudad=ciudad;
      this.direccion=direccion;
      this.telefono=telefono;
      this.fechaRegistro=fechaRegistro;
  }
}
