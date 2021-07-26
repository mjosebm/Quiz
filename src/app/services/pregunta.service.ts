import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('¿Cuál es la capital de Colombia?',[
      new Respuesta('Bogotá', 1),
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Paris',0),
      new Respuesta('Medellín', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Francia?',[
      new Respuesta('Bogotá', 0),
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Santiago', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Argentina?',[
      new Respuesta('El cairo', 0),
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Paris',0),
      new Respuesta('Medellín', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Egipto?',[
      new Respuesta('Bogotá', 0),
      new Respuesta('El cairo', 1),
      new Respuesta('Paris',0),
      new Respuesta('Medellín', 0)
    ]),

  ];

  getPreguntas() {
    return this.preguntas.slice();
  }
  constructor() { }
}
