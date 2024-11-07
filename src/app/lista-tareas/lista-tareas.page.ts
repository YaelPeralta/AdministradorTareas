import { Component } from '@angular/core';

// Interfaz para las tareas
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
  selector: 'app-lista-tareas',
  templateUrl: 'lista-tareas.page.html',
  styleUrls: ['lista-tareas.page.scss'],
})
export class ListaTareasPage {
  tareas: Tarea[] = [];
  editIndex: number | null = null;

  // Variables para el formulario de edición
  valorTitulo = "";
  valorDescripcion = "";
  valorCategoria = "";
  valorPrioridad = "";
  valorEstado = "";
  valorFechaVencimiento = "";
  valorNotas = "";

  constructor() {
    this.cargarTareas();
  }

  cargarTareas() {
    const tareasLocal = localStorage.getItem("tareas");
    this.tareas = tareasLocal ? JSON.parse(tareasLocal) : [];
  }

  eliminarTarea(index: number) {
    if (confirm("¿Deseas eliminar esta tarea?")) {
      this.tareas.splice(index, 1);
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }
  }

  editarTarea(tarea: Tarea, index: number) {
    this.editIndex = index;
    this.valorTitulo = tarea.titulo;
    this.valorDescripcion = tarea.descripcion;
    this.valorCategoria = tarea.categoria;
    this.valorPrioridad = tarea.prioridad;
    this.valorEstado = tarea.estado;
    this.valorFechaVencimiento = tarea.fechaVencimiento;
    this.valorNotas = tarea.notas;
  }

  guardarEdicion() {
    if (this.editIndex !== null) {
      this.tareas[this.editIndex] = {
        titulo: this.valorTitulo,
        descripcion: this.valorDescripcion,
        categoria: this.valorCategoria,
        prioridad: this.valorPrioridad,
        estado: this.valorEstado,
        fechaVencimiento: this.valorFechaVencimiento,
        notas: this.valorNotas,
      };

      localStorage.setItem("tareas", JSON.stringify(this.tareas));
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.editIndex = null;
    this.valorTitulo = "";
    this.valorDescripcion = "";
    this.valorCategoria = "";
    this.valorPrioridad = "";
    this.valorEstado = "";
    this.valorFechaVencimiento = "";
    this.valorNotas = "";
  }

  // Nueva función para marcar como completada
  marcarComoCompletada(index: number) {
    const tarea = this.tareas[index];
    if (tarea.estado === 'Inicial') {
      tarea.estado = 'En ejecución';
    } else if (tarea.estado === 'en Ejecución') {
      tarea.estado = 'Terminada';
    }
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

}