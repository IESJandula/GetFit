import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMonitoresComponent } from './administracion-monitores.component';

describe('AdministracionMonitoresComponent', () => {
  let component: AdministracionMonitoresComponent;
  let fixture: ComponentFixture<AdministracionMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionMonitoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
