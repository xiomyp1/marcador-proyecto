import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit{

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {
    nombre: 'Lakers',
    logo: '/assets/img/LAL.svg',
    jugadores: [
      {nombre: ' Isaiah Thomas', puntos: 0, imagen: '/assets/img/thomas.png'},
      {nombre: ' Kyle Kuzma', puntos: 0, imagen: '/assets/img/kuzma.png'},
      {nombre: ' Julius Randle', puntos: 0, imagen: '/assets/img/randle.png'},
      {nombre: ' Brando Ingram', puntos: 0, imagen: '/assets/img/ingram.png'},
      {nombre: ' Brook Lopez', puntos: 0, imagen: '/assets/img/lopez.png'},
    ]
  }

  equipoVisitante: any = {
    nombre: 'Celtics',
    logo: '/assets/img/BOS.svg',
    jugadores: [
      {nombre: ' Kaadem Allem', puntos: 0, imagen: '/assets/img/allen.png'},
      {nombre: ' Aaron Bynes', puntos: 0, imagen: '/assets/img/bynes.png'},
      {nombre: ' Jabari Bird', puntos: 0, imagen: '/assets/img/bird.png'},
      {nombre: ' Jaylen Brown', puntos: 0, imagen: '/assets/img/brown.png'},
      {nombre: ' Jonathan Gibson', puntos: 0, imagen: '/assets/img/gibson.png'},
    ]
  }

  constructor() {}

  ngOnInit(): void {
    
  }

  //  Metodo que recibe event donde viene el objeto
  // recordemos que viene un objeto con los puntos y el nombre del jugador.
  getCanastaLocal($event: any): void {
    // cuando esto se ejecute decimos que recorra todo con forEach vamos a 
    // tener un elemento lo tipamos como any y para cada elemento se mete una 
    // condicion.
    this.puntosLocales += $event.puntos;
    this.equipoLocal.jugadores.forEach((elem: any) => {
    // si de este elemento su nombre es igual a dolaevent nombreJUgador se le incrementa con elemento punto con los 
    // puntos que vienen en event
      if(elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos
      }})
  }

  getCanastaVisitantes($event: any): void {
    // cuando esto se ejecute decimos que recorra todo con forEach vamos a 
    // tener un elemento lo tipamos como any y para cada elemento se mete una 
    // condicion.
    this.puntosVisitantes += $event.puntos;
    this.equipoVisitante.jugadores.forEach((elem: any) => {
    // si de este elemento su nombre es igual a dolaevent nombreJUgador se le incrementa con elemento punto con los 
    // puntos que vienen en event
      if(elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos
      }})
  }
}
