
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exames-realizados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exames-realizados.component.html',
  styleUrl: './exames-realizados.component.css'
})
export class ExamesRealizadosComponent {
  exames = [
    { cod: '1245', tipo: 'Eletrocardiograma (ECG)',data: '20/05/2024'},
    { cod: '1134', tipo: 'Ecocardiograma',data: '15/11/2022'},
    { cod: '1022', tipo: 'Ultrassonografia abdominal',data: '10/02/2018'},
    { cod: '854', tipo: 'Endoscopia digestiva',data: '30/04/2012'},
  ];
}
