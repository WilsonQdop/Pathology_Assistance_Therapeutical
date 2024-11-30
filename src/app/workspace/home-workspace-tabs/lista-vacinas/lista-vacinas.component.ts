import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-vacinas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lista-vacinas.component.html',
  styleUrl: './lista-vacinas.component.css'
})
export class ListaVacinasComponent {

  vacinas = [
    { vacina: 'Hepatite B', data: '10/09/2005', status: '3º Dose' },
    { vacina: 'Hepatite B', data: '17/04/2005', status: '2º Dose' },
    { vacina: 'Hepatite B', data: '17/03/2005', status: '1º Dose' },
    { vacina: 'Tétano e difteria (dT)', data: '17/12/2024', status: 'Reforço' },
    { vacina: 'Influenza', data: '17/12/2024', status: 'Pendente' },
    { vacina: 'COVID-19', data: '17/12/2024', status: '3º Dose' },
    { vacina: 'COVID-19', data: '17/12/2024', status: '2º Dose' },
    { vacina: 'COVID-19', data: '17/12/2024', status: '1º Dose' },
    { vacina: 'Febre Amarela', data: '17/12/2024', status: 'Dose única' },
  ];

}
