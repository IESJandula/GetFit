import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaquinaComponent } from './card-maquina.component';

describe('CardMaquinaComponent', () => {
  let component: CardMaquinaComponent;
  let fixture: ComponentFixture<CardMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMaquinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
