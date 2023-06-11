import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit{

  @Input() equipo: any; //Se tienen los valores de cada equipo se utilizan estos valores para pintarlos
  @Output() canasta: EventEmitter<any> = new EventEmitter;  //Emitir eventos hacia el padre tipo any y inicializado de la misma clase


  constructor() {}

  ngOnInit(): void {}

  //Metodo con el que se va a disparar cada Boton
  //Nos interesa subir los puntos que ha tenido la canasta, se ponen como parametros, y el jugador que lo a introducido
  //No va a devolver nada por eso se pone de tipo void
  setCanasta(puntos: number, nombreJugador: string): void {
    this.canasta.emit({  //propiedad decorada con output utilizar el metodo emit para que dentro de este metodo se suba la informacion hacia el componente padre.
         puntos,        // en emit podemos hacer un objeto para recoger esos valores,  puntos: puntos o simplificarlos asi puntos,  
         nombreJugador   
    })    
  }
}
