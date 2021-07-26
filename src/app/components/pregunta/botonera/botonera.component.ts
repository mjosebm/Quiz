import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  btnString = 'Listo';

  constructor(public _preguntaService : PreguntaService, private router : Router) { }

  ngOnInit(): void {
  }

  siguiente(){
    switch(this.btnString) {
      case 'Listo' : {
        this._preguntaService.pregConfirmada = true;
        this.btnString = 'Siguiente';

        if(this._preguntaService.preguntas.length -1 === this._preguntaService.indexPregunta){
          this.btnString = 'Finalizar';
        }


        break;
      }
      case 'Siguiente' : {
        this._preguntaService.indexPregunta++;
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.deshabilitarBtn = true;
        this._preguntaService.pregConfirmada = false;
        this.btnString = 'Listo';
        break;
      }
      case 'Finalizar' : {
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.opcionSeleccionada = null;
        this._preguntaService.pregConfirmada = false;
        this._preguntaService.indexPregunta = 0;
        this.router.navigate(['/respuesta']);
      }
    }
  }

}
