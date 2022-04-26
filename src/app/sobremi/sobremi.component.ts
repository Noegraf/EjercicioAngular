import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service'

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  equipo:any[]= [];


  constructor(private _servicio:EquipoService) {
    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
