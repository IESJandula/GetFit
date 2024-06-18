import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionInstalacionesComponent } from './administracion-instalaciones.component';

describe('AdministracionInstalacionesComponent', () => {
  let component: AdministracionInstalacionesComponent;
  let fixture: ComponentFixture<AdministracionInstalacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionInstalacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionInstalacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
