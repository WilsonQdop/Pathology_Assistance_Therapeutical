import { Component } from '@angular/core';
import { HipocratesComponent } from '../../hipocrates/hipocrates.component';
import { CadastrousuarioComponent } from '../../usuario/cadastrousuario/cadastrousuario.component';


@Component({
  selector: 'app-criarconta',
  standalone: true,
  imports: [HipocratesComponent, CadastrousuarioComponent],
  templateUrl: './criarconta.component.html',
  styleUrl: './criarconta.component.css'
})
export class CriarcontaComponent {

}
