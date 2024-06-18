import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstalacionesComponent } from './card-instalaciones.component';

describe('CardInstalacionesComponent', () => {
  let component: CardInstalacionesComponent;
  let fixture: ComponentFixture<CardInstalacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInstalacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInstalacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
