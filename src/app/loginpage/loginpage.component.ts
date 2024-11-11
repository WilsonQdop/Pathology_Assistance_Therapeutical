import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HipocratesComponent } from '../hipocrates/hipocrates.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HipocratesComponent,LoginComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

}
