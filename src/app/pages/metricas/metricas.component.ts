import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.scss']
})
export class MetricasComponent implements OnInit {

  constructor() { }

 factores = [
    { nombre: 'Usabilidad', valor: 80 },
    { nombre: 'Mantenibilidad', valor: 85 },
    { nombre: 'Seguridad', valor: 90 },
    { nombre: 'Rendimiento', valor: 70 }
  ];

  indice = 0;

  ngOnInit() {
    this.calcularIndice();
  }

  calcularIndice() {
    const total = this.factores.reduce((acc, f) => acc + f.valor, 0);
    this.indice = total / this.factores.length;
  }

  

}
