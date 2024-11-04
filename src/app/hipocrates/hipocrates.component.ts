import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule

@Component({
  selector: 'app-hipocrates',
  standalone: true,
  templateUrl: './hipocrates.component.html',
  styleUrls: ['./hipocrates.component.css'],
  imports: [FormsModule] // Adiciona FormsModule à lista de imports
})
export class HipocratesComponent {
  mensagem: string = '';

  enviarMensagem() {
    if (this.mensagem) {
      console.log("Mensagem enviada: ", this.mensagem);
      // Aqui você pode adicionar a lógica para lidar com a mensagem
      this.mensagem = ''; // Limpa a mensagem após o envio
    }
  }
}
