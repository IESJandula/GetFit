import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardOfertasComponent } from '../../components/card-ofertas/card-ofertas.component';
import { CardMaquinaComponent } from '../../components/card-maquina/card-maquina.component';
import { LoginComponent } from '../login/login.component';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interfaces/Contacto.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardPresentacionComponent } from '../../components/card-presentacion/card-presentacion.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, CardOfertasComponent, CardMaquinaComponent, LoginComponent,
             CommonModule, FormsModule, FooterComponent, CardPresentacionComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit {

  contactos?: Contacto[];

  nuevoContacto: Contacto = {
    id: 0,
    nombre: '',
    correo: '',
    mensaje: ''
  }

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.fetchContacto();
  }

  fetchContacto() {
    this.contactoService.findAll().subscribe({
      next: value => {
        this.contactos = value;
        console.log(value);
      },
      error: error => {
        console.error(error);
      }
    })
  }

  createContacto() {
    this.contactoService.create(this.nuevoContacto).subscribe({
      next: () => {
        this.fetchContacto();
        this.nuevoContacto = {
          id: 0,
          nombre: '',
          correo: '',
          mensaje: ''
        };
        //window.location.reload();
      },
      error: error => {
        console.error(error);
      }
    })
  }

}
