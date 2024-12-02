import { Component } from '@angular/core';
import { HipocratesComponent } from '../../../utilitarios/hipocrates/hipocrates.component';
import { CadastrousuarioComponent } from '../cadastrousuario/cadastrousuario.component';


@Component({
  selector: 'app-criarconta',
  standalone: true,
  imports: [HipocratesComponent, CadastrousuarioComponent],
  templateUrl: './criarconta.component.html',
  styleUrl: './criarconta.component.css'
})
export class CriarcontaComponent {

}
