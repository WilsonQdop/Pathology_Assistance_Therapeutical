import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HipocratesComponent } from './hipocrates/hipocrates.component';
import { AuthService } from './auth-service.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HeaderComponent, FooterComponent, FormsModule, HipocratesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

}

