import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { AlumnoDetalleComponent } from '../alumno-detalle/alumno-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'alumno-detalle/:id',
    component: AlumnoDetalleComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
