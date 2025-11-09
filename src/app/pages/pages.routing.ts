import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent }, 
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'normas', component: NormasComponent },
      { path: 'modelos', component: ModelosComponent },
      { path: 'estandares', component: EstandaresComponent },
      { path: 'metricas', component: MetricasComponent },
      { path: 'testing', component: TestingComponent },
      { path: 'evaluacion', component: EvaluacionComponent },
      { path: 'codigo', component: CodigoYProgramacionComponent },
      { path: 'conclusiones', component: ConclusionesComponent },
      { path: 'recomendaciones', component: RecomendacionesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
