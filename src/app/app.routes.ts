import { Routes, RouterModule, ResolveStart } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { TestComponent } from './shared/components/test/test.component';
import { CardComponent } from './shared/components/card/card.component';


export const routes: Routes = [
    {path: '', component: LayoutComponent},
    {
        path: 'test', component: TestComponent
    },
    {
        path: 'card', component: CardComponent
    }
    
];
