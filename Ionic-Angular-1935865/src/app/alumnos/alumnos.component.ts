import { Component, OnInit } from '@angular/core';
import {DbserviceService} from '../dbservice.service'

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
      "matricula": "AB99009",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "AD92932",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "BE12993",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "DD123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "DJ123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "JL123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "LV123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "LT123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "RG123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "SG123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "OG123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "BC12345",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "RR123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "ER1235",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "LM11111",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "ES12376",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "JT90901",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    }
  ];
}