import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;  //este necesita a todos los jugadores del partido
  jugadores: any = [];    //es un array donde se van a unir todos los jugadores de los dos equipos para renderizarlos en un sola  tabla

  constructor(){}

  ngOnInit(): void {
    // los jugadores van hacer igual a la concatenacion de equipo local y visitante, se puede utilizar concat pero ahora solo utilizamos ... es igual.
  this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores]
  }

  // el hook hace dispararce cada vez que hace cambios en los valores que alimentan las propiedades decoradas con input. Cada vez que haya canasto 
  // se modificara el objeto en el padre esto se envia hacia el hijo y lo detectamos con este book.
  // Se lanza la funcion sorJUgadores para que nos ordene el array de jugadores y renderice la tabla
  ngAfterContentChecked(){
    this.sortJugadores();
  }


  // Metodo para ordenar jugadores . Estos jugadores se le pasa una funcion de ordenamiento se le pasa any para que no proteste, y le decimos que devuelva b. puntos que es la propiedad
  // a la que se quiere ordenar menos a.puntos. De esta manmera se ordena por la propiedad punto por sentido descendente.
  sortJugadores(){
    this.jugadores.sort(( a: any, b: any) => {
      return (b.puntos - a.puntos);
    })
  }
}
