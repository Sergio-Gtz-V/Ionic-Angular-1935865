import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges{

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "AR12121"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "AD78321"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "BE12345"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "DD14563"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "DJ098761"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "JL12894"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "LV78594"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "LT45802"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "RG30211"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "SG69420"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "0G34598"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "BC34981"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "RR09812"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "ER42069"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "LM56789"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "ES34672"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "JT09124"
    }
  ];

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";


  
  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    }

    this.alumnos.push(nuevoAlumno); //Agrega elemento al arreglo

   this.alumnos.sort(function(a, b) {
    var nameA = a.nombre.toUpperCase(); 
    var nameB = b.nombre.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  });

  console.log(this.alumnos)
  }
}
