import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HipocratesComponent } from '../hipocrates/hipocrates.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HipocratesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
