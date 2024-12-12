import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desenvolvedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desenvolvedores.component.html',
  styleUrl: './desenvolvedores.component.css'
})
export class DesenvolvedoresComponent {
  developers = [

    { name: 'Gustavo Andrew', contact: '(81) 98210-4778', photo: 'gustavo.jpg', email: "gustavoandrew25@gmail.com", linkGithub: "https://github.com/ineviTavinho" , github: "ineviTavinho", linkLinkedin: "https://linkedin.com/in/gustavosasilva/", linkedin: "gustavosasilva"},
    
    { name: 'João Pedro', contact: '(81) 99880-1195', photo: 'Jotta.jpg', email:"joao80615@gmail.com", linkGithub: "https://github.com/Jotta2k4" ,github:"Jotta2k4", linkLinkedin: "https://www.linkedin.com/in/joao-carneiro-silva", linkedin: "joao-carneiro-silva"},

    { name: 'Vinicius Souza ', contact: '(81) 99435-6528',  photo: 'vinicius.jpg', email: "vinibr300@gmail.com", linkGithub: "https://github.com/vinigenes" , github: "vinigenes", linkLinkedin: "https://www.linkedin.com/in/vinicius-souza-361779262/", linkedin: "vinicius-souza"},

    { name: 'Wilson Francisco',  contact: '(81) 98843-0765', photo: 'Wilson.jpg', email: "wilson.qdop@gmail.com", linkGithub: "https://github.com/WilsonQdop" , github: "WilsonQdop", linkLinkedin: "https://www.linkedin.com/in/wilson-ads/", linkedin: "wilson-ads"},
  ];
}
