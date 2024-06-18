import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Monitor } from '../../interfaces/Monitor.interface';
import { MonitorService } from '../../services/monitor.service';
import { Usuario } from '../../interfaces/Usuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-monitores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-monitores.component.html',
  styleUrl: './card-monitores.component.css'
})
export class CardMonitoresComponent implements OnInit {

  monitores?: Monitor[];
  currentUser: Usuario | null;

  constructor(private monitorService: MonitorService) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  ngOnInit(): void {
    this.fetchMonitores();
  }

  fetchMonitores() {
    this.monitorService.findAll().subscribe({
      next: value => {
        this.monitores = value;
        console.log(value);
      },
      error: error => {
        console.error(error);
      }
    })
  }

}
