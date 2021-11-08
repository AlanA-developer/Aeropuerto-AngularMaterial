import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-viaje',
  templateUrl: './formulario-viaje.component.html',
  styleUrls: ['./formulario-viaje.component.css']
})
export class FormularioViajeComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'InventadoSistan', abbreviation: 'IVS'},
    {name: 'País de los juguetes', abbreviation: 'PJ'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Información guardada');
  }
}
