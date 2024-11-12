import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HipocratesComponent } from '../hipocrates/hipocrates.component';

@Component({
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cadastrousuario.component.html',
  styleUrl: './cadastrousuario.component.css'
})
export class CadastrousuarioComponent {

}
