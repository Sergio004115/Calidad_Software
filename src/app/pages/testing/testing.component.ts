import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }

  tests = [
    { nombre: 'Pruebas Funcionales', valor: 85 },
    { nombre: 'Pruebas No Funcionales', valor: 80 },
    { nombre: 'Cobertura de Código', valor: 75 },
    { nombre: 'Usabilidad', valor: 90 }
  ];

  resultado = 0;

  ngOnInit() {
    this.calcularResultado();
  }

  calcularResultado() {
    const total = this.tests.reduce((acc, t) => acc + t.valor, 0);
    this.resultado = total / this.tests.length;
  }

}
