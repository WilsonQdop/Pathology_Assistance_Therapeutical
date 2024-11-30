import { Component } from '@angular/core';
import { StatusContaHeaderComponent } from '../status-conta-header/status-conta-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StatusContaHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}


