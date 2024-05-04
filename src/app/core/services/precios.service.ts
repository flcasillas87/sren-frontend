import { Injectable, inject, } from '@angular/core';
import { Observable, map } from 'rxjs';
import { catchError } from 'rxjs';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  docData,
  getDoc,
  deleteDoc,
} from '@angular/fire/firestore';

import { Precio } from '../models/precios.model';

const PATH= 'precios';

@Injectable({
  providedIn: 'root',
})
export class PreciosService {
  // inject Firestore
  // https://firebase.google.com/docs/firestore/manage-data/add-data
  // https://firebase.google.com/docs/firestore/query-data/get-data
  // https://firebase.google.com/docs/firestore/manage-data/delete-data
  // https://firebase.google.com/docs/firestore/manage-data/modify-data
  private firestore: Firestore = inject(Firestore);

  // collection reference
  private collection = collection(this.firestore, PATH);


//Obtener Coleccion
  getPrecios() {
    return collectionData(this.collection, { idField: 'id' }) as Observable<
      Precio[]
    >;
  }

  //Obtener un docuemnto de la coleccion
  async getPrecio(id: string) {
    try {
      const docRef = doc(this.firestore, PATH, id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data() as Precio;
      } else {
        throw new Error('No such document!');
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
    const docRef = doc(this.firestore, PATH, id);
    return docData(docRef, { idField: 'id' }) as Observable<Precio>;
  }


  //agregar un documento a la coleccion
  addPrecio(precio: Precio) {
    return addDoc(this.collection, precio);
  }

  //eliminar un documento de la coleccion
  deletePrecio(id: string) {
    const docRef = doc(this.firestore, PATH, id);
    return deleteDoc(docRef);
  }

  //modificar un documento de la coleccion
updatePrecio(id: string, precio: Precio) {
  const docRef = doc(this.firestore, PATH,id);
  return updateDoc(docRef, {precio});
}







}
