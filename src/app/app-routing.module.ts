import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarViajeComponent } from './agendar-viaje/agendar-viaje.component';
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: 'principal', component:  HomeComponent },
  { path: 'agendar', component: AgendarViajeComponent },
  { path: '',   redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
