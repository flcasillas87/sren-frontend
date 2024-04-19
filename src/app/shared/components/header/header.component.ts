import { Component, HostBinding, Input } from '@angular/core';
import { Positions } from '../../../core/interfaces/types';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderDividerComponent } from './header-divider/header-divider.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { HeaderTogglerComponent } from './header-toggler/header-toggler.component';

type Container = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderBrandComponent,
    HeaderDividerComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderSearchComponent,
    HeaderTextComponent,
    HeaderTogglerComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /**
   * Defines optional container wrapping children elements.
   */
  @Input() container?: Container;
  /**
   * Place header in non-static positions.
   */
  @Input() position?: Positions;
  /**
   * Default role for header. [docs]
   * @type string
   * @default 'header'
   */

  @HostBinding('attr.role')
  @Input()
  role = 'header';

  @HostBinding('class') get getClasses(): any {
    return !!this.container ? this.containerClasses : this.headerClasses;
  }

  get headerClasses(): any {
    return {
      header: true,
      [`header-${this.position}`]: !!this.position,
    };
  }

  get containerClasses(): any {
    return {
      container: this.container === true,
      [`container-${this.container}`]: typeof this.container === 'string',
    };
  }
}
