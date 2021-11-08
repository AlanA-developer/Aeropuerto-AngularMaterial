import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  texto: string =
    'Hola, me gustaría aclarar que esta página únicamente es un modelo para mi portafolio profesional, en ningún momento se hace referencia a alguna compañía, aerolínea en especial, muchas gracias';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  advertencia() {
    const tomandoObjetoHtml: any = document.getElementById('advertenciaOculta');
    tomandoObjetoHtml.innerText = this.texto;
    setTimeout( () => {
      tomandoObjetoHtml.innerText = "";
    }, 10000);
  }
}
