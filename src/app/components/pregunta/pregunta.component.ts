import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[];

  constructor(public _preguntaService : PreguntaService) { 
    
  }

  ngOnInit(): void {
    this.listPregunta = this._preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this._preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta : Respuesta, indexRespuesta : number){
    if (this._preguntaService.pregConfirmada === true){
      return;
    }
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.deshabilitarBtn = false;
    this._preguntaService.indexRespuesta = indexRespuesta;
  }

  addClassOption(respuesta: Respuesta){
    //Pregunta seleccionada SIN confirmar
    if( respuesta === this._preguntaService.opcionSeleccionada && !this._preguntaService.pregConfirmada){
      return 'active';
    }
    //respuesta CORRECTA y confirmada
    if( respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 1){
      return 'list-group-item-success';
    }else if (respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 0){
        return 'list-group-item-danger';

    }

  }

  iconCorrecta(respuesta : Respuesta) {
    if(respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 1){
        return true;
      }
      else {
        return false;
      }
  }

  iconIncorrecta(respuesta : Respuesta) {
    if(respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 0){
        return true;
      }
      else {
        return false;
      }
  }

}
