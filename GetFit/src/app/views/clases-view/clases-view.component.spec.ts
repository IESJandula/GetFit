import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesViewComponent } from './clases-view.component';

describe('ClasesViewComponent', () => {
  let component: ClasesViewComponent;
  let fixture: ComponentFixture<ClasesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
