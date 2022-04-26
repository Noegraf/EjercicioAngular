import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

animales:Array<any> = [
  {tipo:'Perro', nombre:'Lisa', edad:10},
  {tipo:'Gato', nombre:'Felipo', edad:7},
  {tipo:'Conejo', nombre:'Peter', edad:2}
]

  constructor() { }

  ngOnInit(): void {
  }

}
