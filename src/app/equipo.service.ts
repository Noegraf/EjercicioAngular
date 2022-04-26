import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]= [

    {
      programa: 'Google Activate',
      area:'Introduccion a la Programacion',
      fecha:'2021',
    },
    {
      programa: 'Argentina Programa',
      area:'Desarrollo fullstack',
      fecha:'2021 - actualidad',
    },
    {
      programa: 'Edutin',
      area:'Angular',
      fecha:'2022',
    },
    {
      programa: 'ISPC Instituto Superior Técnico de Córdoba',
      area:'Desarrollo Web y Aplicaciones Digitales',
      fecha:'2022 - actualidad',
    },
    {
      programa: 'Codo a Codo',
      area:'Desarrollo Web Front End',
      fecha:'2021',
    },
    {
      programa: 'Codo a Codo',
      area:'Desarrollo Web Back end',
      fecha:'2021',
    },
    {
      programa: 'Codo a Codo',
      area:'Diseño UX/UI',
      fecha:'2021',
    }

  ]
  

  constructor() { 
    console.log('servicio en funcionamiento')
  }

  obtenerEquipo(){
    return this.equipo;
  }
}
