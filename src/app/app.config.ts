import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"sren-26321","appId":"1:934110277189:web:12ba6b99a608953885bd2c","databaseURL":"https://sren-26321-default-rtdb.firebaseio.com","storageBucket":"sren-26321.appspot.com","apiKey":"AIzaSyBUHttGYbkgyNky2RhSjlhrIoe2Srf0PVA","authDomain":"sren-26321.firebaseapp.com","messagingSenderId":"934110277189","measurementId":"G-H6ESY9PTS6"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"sren-26321","appId":"1:934110277189:web:12ba6b99a608953885bd2c","databaseURL":"https://sren-26321-default-rtdb.firebaseio.com","storageBucket":"sren-26321.appspot.com","apiKey":"AIzaSyBUHttGYbkgyNky2RhSjlhrIoe2Srf0PVA","authDomain":"sren-26321.firebaseapp.com","messagingSenderId":"934110277189","measurementId":"G-H6ESY9PTS6"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
