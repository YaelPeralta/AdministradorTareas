import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  viewDate: Date = new Date(); // Fecha actual
  tareasCalendario: CalendarEvent[] = []; // Eventos del calendario

  constructor() { }

  ngOnInit() {
    console.log('Cargando eventos...');
    this.cargarEventosDePrueba();
  }

  // Cargar eventos de ejemplo para probar
  cargarEventosDePrueba() {
    this.tareasCalendario = [
      {
        start: new Date('2024-11-06T10:00:00'),
        title: 'Reunión con equipo',
        color: { primary: '#ff0000', secondary: '#ffcccc' }, // Rojo
        meta: {
          descripcion: 'Reunión de planificación',
          categoria: 'Trabajo',
        }
      },
      {
        start: new Date('2024-11-06T14:00:00'),
        title: 'Cena con amigos',
        color: { primary: '#00ff00', secondary: '#ccffcc' }, // Verde
        meta: {
          descripcion: 'Cena en el restaurante local',
          categoria: 'Social',
        }
      },
      {
        start: new Date('2024-11-07T09:00:00'),
        title: 'Doctor',
        color: { primary: '#0000ff', secondary: '#ccccff' }, // Azul
        meta: {
          descripcion: 'Cita médica',
          categoria: 'Personal',
        }
      }
    ];

    console.log('Eventos del calendario cargados:', this.tareasCalendario);
  }

  // Maneja el clic sobre un evento
  onEventClicked(evento: any) {
    console.log('Evento clickeado:', evento);
    const tarea = evento.event.meta;
    alert(`Título: ${evento.event.title}\nDescripción: ${tarea.descripcion}\nCategoría: ${tarea.categoria}`);
  }
}
