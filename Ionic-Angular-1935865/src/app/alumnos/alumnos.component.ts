import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    }
  ];

}