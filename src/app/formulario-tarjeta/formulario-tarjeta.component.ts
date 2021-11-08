import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css']
})
export class FormularioTarjetaComponent implements OnInit {

  tarjetas: Array<string> = ["Crédito", "Débito"]

  constructor() { }

  ngOnInit(): void {
  }

}
