import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../auth-service.service';

@Component({
  selector: 'app-hipocrates',
  standalone: true,
  templateUrl: './hipocrates.component.html',
  styleUrls: ['./hipocrates.component.css'],
  imports: [FormsModule, CommonModule, MatIconModule] 
})
export class HipocratesComponent {
  isUserLogged: boolean = false;

  showHipocrates: boolean = false;
  mensagem: string = '';
  audioUrl: string | null = null;
  private mediaRecorder: MediaRecorder | null = null; 
  private audioChunks: Blob[] = []; 
  gravando: boolean = false; 
  minimizado: boolean = false; 

 
  mensagens: { texto?: string; audioUrl?: string }[] = [];

  enviarMensagem() {
    if (this.mensagem) {
      this.mensagens.push({ texto: this.mensagem });
      this.mensagem = ''; 
    }
  }

  
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


  pararGravacao() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
    }
  }

 
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
