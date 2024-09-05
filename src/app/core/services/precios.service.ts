import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Precio } from '../models/precios.model';
@Injectable({
  providedIn: 'root',
})
export class PreciosService {
  constructor() {}

  //Metodos para obtener, crear, actualizar y eliminar
  //Considera el uso de RxJS Observables para manejar la asincronía en tus modelos de datos.
  //validar datos en los modelos o en los servicios antes de enviarlos al servidor o de utilizarlos en tu aplicación.
  getPrecio(): Observable<Precio[]> {
    // Aquí puedes hacer una llamada HTTP a una API para obtener los datos de los empleados.
    // Por simplicidad, retornamos datos estáticos en este ejemplo.
    //Dummy Data
    const precios: Precio[] = [
      new Precio(1, 'NRS', 'CC Noreste', '15/05/2023', 150),
      new Precio(2, 'NRS', 'CC Noreste', '16/05/2023', 200),
      new Precio(3, 'NRS', 'CC Noreste', '17/05/2023', 250),
    ];
    //

    return of(precios);
  }
}
