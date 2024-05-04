import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';

import { Precio } from '../models/precios.model';

interface Item {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private firestore = environment.firebaseConfig;

  constructor(private firestore: Firestore) {}

  //PRECIOS
  addPrecio(precio: Precio) {
    const precioRef = collection(this.firestore, 'precios');
    return addDoc(precioRef, precio);
  }

  deletePrecio(id: string) {
    const precioRef = doc(this.firestore, 'precios', id);
    return deleteDoc(precioRef);
  }
}
