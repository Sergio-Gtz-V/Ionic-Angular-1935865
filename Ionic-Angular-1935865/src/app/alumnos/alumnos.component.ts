import { Component, OnInit } from '@angular/core';
import {DbserviceService} from '../dbservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.getAlumnos();
  }

  alumnoslista: any = [];

  getAlumnos(){
    return this.http.get('https://bd-lab-appsmoviles-default-rtdb.firebaseio.com/alumnos').subscribe(res=>{
      const alumnoRes: any = res;
      const alumnosArray = Object.keys(res).forEach((key:any) => {
        (this.alumnoslista).push(alumnoRes[key])
      });
    });
  }
}
