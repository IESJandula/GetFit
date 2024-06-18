import { Component, OnInit } from '@angular/core';
import { Maquina } from '../../interfaces/Maquina.interface';
import { MaquinaService } from '../../services/maquina.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../interfaces/Usuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-maquina',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-maquina.component.html',
  styleUrl: './card-maquina.component.css'
})
export class CardMaquinaComponent implements OnInit{

  maquinas?: Maquina[];
  currentUser: Usuario | null;


  constructor(private maquinaService: MaquinaService) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  ngOnInit(): void {
    this.fetchMaquinas();
  }

  private fetchMaquinas() {
    this.maquinaService.findAll().subscribe({
      next: value => {
        this.maquinas = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }
}
