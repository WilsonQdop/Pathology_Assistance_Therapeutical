import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Importa o MatIconModule

@Component({
  selector: 'app-hipocrates',
  standalone: true,
  templateUrl: './hipocrates.component.html',
  styleUrls: ['./hipocrates.component.css'],
  imports: [FormsModule, CommonModule, MatIconModule] // Adiciona os módulos necessários
})
export class HipocratesComponent {
  mensagem: string = '';
  audioUrl: string | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  gravando: boolean = false;

  // Array para armazenar mensagens e áudios
  mensagens: { texto?: string; audioUrl?: string }[] = [];

  enviarMensagem() {
    if (this.mensagem) {
      this.mensagens.push({ texto: this.mensagem }); // Adiciona a mensagem ao array
      console.log("Mensagem enviada: ", this.mensagem);
      this.mensagem = ''; // Limpa a mensagem após o envio
    }
  }

  async iniciarGravacao() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.start();
    this.gravando = true;

    this.mediaRecorder.ondataavailable = (event) => {
      this.audioChunks.push(event.data);
    };

    this.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      this.audioUrl = URL.createObjectURL(audioBlob);
      this.mensagens.push({ audioUrl: this.audioUrl }); // Adiciona o áudio ao array
      this.audioChunks = [];
      this.gravando = false;
    };
  }

  pararGravacao() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
    }
  }
}
