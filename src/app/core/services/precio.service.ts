import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Precio } from '../models/precio.model';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  constructor() { }

  getPrecios(): Observable<Precio[]> {
    const precio: Precio[] =[
      new Precio(1,'Noreste',),
      
    ];
    return of(precio);
  }


    
}
