import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Modulos
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NormasComponent } from './normas/normas.component';
import { ModelosComponent } from './modelos/modelos.component';
import { EstandaresComponent } from './estandares/estandares.component';
import { MetricasComponent } from './metricas/metricas.component';
import { TestingComponent } from './testing/testing.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { CodigoYProgramacionComponent } from './codigoYProgramacion/CodigoYProgramacion.component';
import { ConclusionesComponent } from './conclusiones/conclusiones.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    NormasComponent,
    ModelosComponent,
    EstandaresComponent,
    MetricasComponent,
    TestingComponent,
    EvaluacionComponent,
    CodigoYProgramacionComponent,
    ConclusionesComponent,
    RecomendacionesComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ], 
  providers: [DatePipe]
})
export class PagesModule { }
