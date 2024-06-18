import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMaquinasComponent } from './administracion-maquinas.component';

describe('AdministracionMaquinasComponent', () => {
  let component: AdministracionMaquinasComponent;
  let fixture: ComponentFixture<AdministracionMaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionMaquinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
