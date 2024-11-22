import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  options = ['Home Workspace', 'Meus pacientes', 'Cadastrar Pacientes', 'Dashboards', 'Suporte'];
  selectedOption: string = this.options[0]; // Define a opção inicial como a primeira

  selectOption(option: string) {
    this.selectedOption = option;
  }

}
