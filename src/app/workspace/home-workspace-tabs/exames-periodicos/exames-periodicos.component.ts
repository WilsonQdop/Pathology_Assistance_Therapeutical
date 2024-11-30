import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exames-periodicos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exames-periodicos.component.html',
  styleUrl: './exames-periodicos.component.css'
})
export class ExamesPeriodicosComponent {
  exames = [
    { cod: '1245', tipo: 'Hemograma completo',data: '02/05/2024'},
    { cod: '1134', tipo: 'Glicemia de jejum',data: '02/05/2024'},
    { cod: '1022', tipo: 'Hemoglobina glicada',data: '01/05/2024'},
    { cod: '854', tipo: 'Colesterol total',data: '01/05/2024'},
    { cod: '854', tipo: 'Creatinina sérica',data: '01/05/2024'},
    { cod: '854', tipo: 'Função hepática (TGO/TGP)',data: '30/04/2024'},
    { cod: '854', tipo: 'Exame de urina (EAS)',data: '30/04/2024'},
    { cod: '854', tipo: 'TSH',data: '30/04/2024'},




  ];
}
