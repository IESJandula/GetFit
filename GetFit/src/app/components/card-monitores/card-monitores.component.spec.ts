import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonitoresComponent } from './card-monitores.component';

describe('CardMonitoresComponent', () => {
  let component: CardMonitoresComponent;
  let fixture: ComponentFixture<CardMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMonitoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
