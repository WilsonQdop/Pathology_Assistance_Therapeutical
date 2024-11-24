import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-hipocrates',
  standalone: true,
  templateUrl: './hipocrates.component.html',
  styleUrls: ['./hipocrates.component.css'],
  imports: [FormsModule, CommonModule, MatIconModule] // Adiciona os módulos necessários
})
export class HipocratesComponent {
  isUserLogged: boolean = false;

  showHipocrates: boolean = false;
  mensagem: string = ''; // Mensagem de texto
  audioUrl: string | null = null; // URL do áudio gravado
  private mediaRecorder: MediaRecorder | null = null; // Recorder para áudio
  private audioChunks: Blob[] = []; // Armazena os pedaços de áudio gravados
  gravando: boolean = false; // Controle de gravação
  minimizado: boolean = false; // Controle de minimização da caixa de chat

  // Array de mensagens de texto ou áudio
  mensagens: { texto?: string; audioUrl?: string }[] = [];

  // Função para enviar uma mensagem de texto
  enviarMensagem() {
    if (this.mensagem) {
      this.mensagens.push({ texto: this.mensagem });
      this.mensagem = ''; // Limpa a entrada após enviar a mensagem
    }
  }

  // Função para iniciar a gravação de áudio
  async iniciarGravacao() {
    try {
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
        this.mensagens.push({ audioUrl: this.audioUrl }); // Adiciona o áudio à lista de mensagens
        this.audioChunks = [];
        this.gravando = false;
      };
    } catch (error) {
      console.error('Erro ao acessar o microfone: ', error);
    }
  }

  // Função para parar a gravação
  pararGravacao() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
    }
  }

  // Função para minimizar ou expandir a área de mensagens
  minimizar() {
    this.minimizado = !this.minimizado;
  }


  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getLoginStatusObservable().subscribe((status: boolean) => {
      this.isUserLogged = status;
    });
  }

  toggleTemplate() {
    this.isUserLogged = !this.isUserLogged;
    if (this.isUserLogged) {
    }
  }

  toggleMenu() {
    this.showHipocrates = !this.showHipocrates;  // Alterna a exibição do menu
  }
}
