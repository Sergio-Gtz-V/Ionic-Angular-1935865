import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlumnoDetalleComponent } from './alumno-detalle.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AlumnoDetalleComponent],
  exports: [AlumnoDetalleComponent]
})
export class AlumnoDetalleComponentModule {}