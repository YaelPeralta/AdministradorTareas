import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-add-tareas',
  templateUrl: 'add-tareas.page.html',
  styleUrls: ['add-tareas.page.scss'],
})
export class AddTareasPage {
  valorTitulo = "";
  valorDescripcion = "";
  valorCategoria = "";
  valorPrioridad = "";
  valorEstado = "";
  valorFechaVencimiento = "";
  valorNotas = "";

  constructor(private router: Router) { }

  Agregar() {
    if (this.valorTitulo && this.valorDescripcion && this.valorCategoria && this.valorPrioridad &&
      this.valorEstado && this.valorFechaVencimiento && this.valorNotas) {

      const nuevaTarea: Tarea = {
        titulo: this.valorTitulo,
        descripcion: this.valorDescripcion,
        categoria: this.valorCategoria,
        prioridad: this.valorPrioridad,
        estado: this.valorEstado,
        fechaVencimiento: this.valorFechaVencimiento,
        notas: this.valorNotas
      };

      // Obtener tareas existentes del localStorage
      const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
      tareas.push(nuevaTarea);

      // Guardar la nueva lista de tareas en localStorage
      localStorage.setItem("tareas", JSON.stringify(tareas));

      // Limpiar el formulario después de agregar la tarea
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.valorTitulo = "";
    this.valorDescripcion = "";
    this.valorCategoria = "";
    this.valorPrioridad = "";
    this.valorEstado = "";
    this.valorFechaVencimiento = "";
    this.valorNotas = "";
  }
}
