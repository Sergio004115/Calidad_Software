import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

  form!: FormGroup;
  finalizado = false;
  puntaje = 0;
  mensajeResultado = '';

  preguntas = [
    {
      texto: '1️¿Qué norma define las características de calidad del producto software?',
      correcta: 'ISO/IEC 25010'
    },
    {
      texto: '2️¿Cuál principio de Clean Code recomienda evitar duplicación?',
      correcta: 'DRY'
    },
    {
      texto: '3️¿Qué herramienta se usa para el análisis estático del código?',
      correcta: 'SonarQube'
    },
    {
      texto: '4️¿Qué tipo de prueba evalúa el rendimiento del software?',
      correcta: 'No Funcional'
    },
    {
      texto: '5️¿Qué modelo evalúa la madurez de los procesos de desarrollo?',
      correcta: 'CMMI'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // ✅ Crear un control por cada pregunta (campo de texto vacío)
    const group: any = {};
    this.preguntas.forEach((_, index) => {
      group['p' + index] = [''];
    });

    this.form = this.fb.group(group);
  }

  finalizarEvaluacion() {
    const respuestas = this.form.value;
    console.log('🚀 Respuestas enviadas:', respuestas);

    let correctas = 0;
    this.preguntas.forEach((pregunta, i) => {
      const respuesta = respuestas['p' + i]?.trim().toLowerCase();
      const esperada = pregunta.correcta.trim().toLowerCase();
      if (respuesta === esperada) correctas++;
    });

    this.puntaje = Math.round((correctas / this.preguntas.length) * 100);
    this.finalizado = true;

    if (this.puntaje >= 80) {
      this.mensajeResultado = '¡Excelente! Dominas los conceptos de calidad del software.';
    } else if (this.puntaje >= 50) {
      this.mensajeResultado = 'Buen intento. Revisa nuevamente los temas.';
    } else {
      this.mensajeResultado = 'Debes repasar los conceptos principales. ¡Inténtalo nuevamente!';
    }

    console.log('✅ Puntaje calculado:', this.puntaje);
  }

  reiniciar() {
    this.form.reset();
    this.finalizado = false;
    this.puntaje = 0;
  }
}
