import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Satisfacccion {
  name: string;
}

@Component({
  selector: 'app-agendar-viaje',
  templateUrl: './agendar-viaje.component.html',
  styleUrls: ['./agendar-viaje.component.css']
})
export class AgendarViajeComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  //Funcionalidad de autocompletado
  myControl = new FormControl();
  options: Satisfacccion[] = [{name: 'Completa'}, {name: 'Podría mejorar'}, {name: 'Mala'}, {name: 'Muy mala'}];
  filteredOptions!: Observable<Satisfacccion[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(user: Satisfacccion): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Satisfacccion[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  //Funcionalidad de recomendacion
  favoriteSeason: string = "";
  seasons: string[] = ['Sí', 'Tal vez', 'Quizá', 'No'];
}

