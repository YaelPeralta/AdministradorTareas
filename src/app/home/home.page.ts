import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

// Interfaz Tarea para estructurar las tareas
interface Tarea {
  titulo: string;
  descripcion: string;
  categoria: string;
  prioridad: string;
  estado: string;
  fechaVencimiento: string;
  notas: string;
}

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
    this.cargarTareas();
  }

  cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas") || "[]") as Tarea[];

    // Convertir cada tarea en un evento del calendario
    this.tareasCalendario = tareas.map(tarea => ({
      start: new Date(tarea.fechaVencimiento),
      title: tarea.titulo,
      color: { primary: '#1e90ff', secondary: '#D1E8FF' }, // Colores personalizables
      meta: tarea // Adjunta toda la tarea al evento
    }));
  }

  onEventClicked(evento: any) {
    const calendarEvent = evento as { event: CalendarEvent };
    this.verDetallesTarea(calendarEvent.event);
  }

  verDetallesTarea(evento: CalendarEvent) {
    const tarea = evento.meta as Tarea;
    alert(`Título: ${tarea.titulo}\nDescripción: ${tarea.descripcion}\nFecha de Vencimiento: ${tarea.fechaVencimiento}`);
  }
}
