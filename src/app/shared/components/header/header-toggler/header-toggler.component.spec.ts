import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTogglerComponent } from './header-toggler.component';

describe('HeaderTogglerComponent', () => {
  let component: HeaderTogglerComponent;
  let fixture: ComponentFixture<HeaderTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTogglerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
