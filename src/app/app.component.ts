import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { TestComponent } from './shared/components/test/test.component';
import { TableComponent } from './shared/components/table/table.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    DashboardComponent,
    TestComponent,
    TableComponent,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SREN';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }

}
