import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HipocratesComponent } from '../hipocrates/hipocrates.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HipocratesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
