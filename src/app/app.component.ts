import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './headerComponents/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HipocratesComponent } from './utilitarios/hipocrates/hipocrates.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HeaderComponent, FooterComponent, FormsModule, HipocratesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

}

