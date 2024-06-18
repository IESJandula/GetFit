import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentacionComponent } from './card-presentacion.component';

describe('CardPresentacionComponent', () => {
  let component: CardPresentacionComponent;
  let fixture: ComponentFixture<CardPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPresentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
