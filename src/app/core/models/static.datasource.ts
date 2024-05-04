import { Injectable } from "@angular/core";
import { Precio } from "./precios.model";

@Injectable()
export class StaticDataSource{
    private data:Precio [];

    constructor(){
        this.data = new Array <Precio> (
            new Precio(1,"Noreste","15/05/2023",5),
            new Precio(2,"Noreste","16/05/2023",6));
    }
    getData():Precio[]{
        return this.data;
    }
}