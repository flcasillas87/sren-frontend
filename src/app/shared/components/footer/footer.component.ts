import { Component, HostBinding, Input } from '@angular/core';
import { Positions } from '../../../lib/types';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  /**
   * Place footer in non-static positions. [docs]
   * @type Positions
   */
  @Input() position?: Positions;
  /**
   * Default role for footer. [docs]
   * @type string
   * @default 'footer'
   */
  @Input()
  @HostBinding('attr.role')
  role = 'footer';

  @HostBinding('class')
  get getClasses(): any {
    return {
      footer: true,
      [`footer-${this.position}`]: !!this.position,
    };
  }
}
