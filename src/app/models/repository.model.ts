import { Injectable } from '@angular/core';
import { Precio } from './precio.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class Model {
  private precios: Precio[];
  private locator = (p: Precio, id?: number) => p.id == id;

  constructor(private dataSource: StaticDataSource) {
    this.precios = new Array<Precio>();
    this.dataSource.getData().forEach((p) => this.precios.push(p));
  }

  getPrecios(): Precio[] {
    return this.precios;
  }

  getPrecio(id: number): Precio | undefined {
    return this.precios.find((p) => this.locator(p, id));
  }

  savePrecio(precio: Precio) {
    if (precio.id == 0 || precio == null) {
      precio.id = this.generateID();
      this.precios.push(precio);
    } else {
      let index = this.precios.findIndex((p) => this.locator(p, precio.id));
      this.precios.splice(index, 1, precio);
    }
  }

  deletePrecio(id:number){
    let index=this.precios.findIndex(p=>this.locator(p,id));
    if (index>-1){
        this.precios.splice(index,1);
    }
  }

  private generateID():number{
    let candidate=100;
    while (this.getPrecio(candidate)!=null)
    {
        candidate++;
    }
    return candidate;
  }


}
