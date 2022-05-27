import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from './Alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAlumnos(): Observable<Alumno>{
    return this.http.get<Alumno>('https://bd-lab-appsmoviles-default-rtdb.firebaseio.com/alumnos.json')
  }

  getAlumnoDetalle(id: number){
    return this.http.get('https:///bd-lab-appsmoviles-default-rtdb.firebaseio.com/alumnos/'+ id + '.json')
  }

  //POST

  postAlumno(nuevoAlumno: any){
    return this.http.post('/bd-lab-appsmoviles-default-rtdb.firebaseio.com/alumnos.json', nuevoAlumno)
  }

  //DELETE

  deleteAlumno(alumno: string) {
    return this.http.delete('/bd-lab-appsmoviles-default-rtdb.firebaseio.com/alumnos/' + alumno+'.json' )
  }

  //PUT
  actualizarAlumno(id: number , nuevosDatos: string) {
    return this.http.put('/bd-lab-appsmoviles-default-rtdb.firebaseio.com/alumnos/' + id + '.json', nuevosDatos )
  }

  alumnos = [
    {
      "nombre": "Abraham",
      "Apellido": "Ramírez",
      "matricula": "ABC123",
    },
    {
      "nombre": "Aylin",
      "Apellido": "Demecti",
      "matricula": "BBIWAD",
    },
    {
      "nombre": "Brian",
      "Apellido": "Esquivel",
      "matricula": "DWAKDAW",
    },
    {
      "nombre": "Diego",
      "Apellido": "Dávila",
      "matricula": "NIDABW",
    },
    {
      "nombre": "Diego",
      "Apellido": "Jasso",
      "matricula": "123BJ",
    },
    {
      "nombre": "Julio",
      "Apellido": "Manuel",
      "matricula": "GFD342",
    },
    {
      "nombre": "Luis",
      "Apellido": "Armando",
      "matricula": "DAW321",
    },
    {
      "nombre": "Luis",
      "Apellido": "Otoniel",
      "matricula": "AD324A",
    },
    {
      "nombre": "Manuel",
      "Apellido": "Antonio",
      "matricula": "321SDF",
    },
    {
      "nombre": "Rogel",
      "Apellido": "Axel",
      "matricula": "123DWASD",
    },
    {
      "nombre": "Sergio",
      "Apellido": "Gutierrez",
      "matricula": "321DAS",
    }
  ]
}
