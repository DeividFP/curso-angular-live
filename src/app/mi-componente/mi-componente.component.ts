import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent implements OnInit {
  public nombre: string;
  public nuevoNombre: string = '';
  public ocultar: boolean = true;
  constructor() { 
    this.nombre = 'juanito';
  }

  ngOnInit(): void {
  }

  calcularPI(params: string): void {

  }

  alertarNombre():void {
    alert(this.nombre);
    this.ocultar=false;
  }

}
