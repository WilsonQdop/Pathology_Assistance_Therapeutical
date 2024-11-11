import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HipocratesComponent } from '../hipocrates/hipocrates.component';
import { CadastrousuarioComponent } from '../cadastrousuario/cadastrousuario.component';

@Component({
  selector: 'app-criarconta',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HipocratesComponent,CadastrousuarioComponent],
  templateUrl: './criarconta.component.html',
  styleUrl: './criarconta.component.css'
})
export class CriarcontaComponent {

}
