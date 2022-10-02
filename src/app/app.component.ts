import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre: String = '';
  apellido: String = '';
  cargo: String = '';

  entradas: any;

  constructor() {
    this.entradas = [
      { titulo: 'Python cada día más presente' },
      { titulo: 'Java presente desde hace más de 20 años' },
      { titulo: 'Javascript cada vez más funcional' },
      { titulo: 'Kotlin potencia para tus app' },
      { titulo: '¿Dónde quedó pascal?' },
    ];
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = 'usuario registrado con éxito';
  }
}
