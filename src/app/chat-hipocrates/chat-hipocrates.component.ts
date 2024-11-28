import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-hipocrates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-hipocrates.component.html',
  styleUrl: './chat-hipocrates.component.css'
})
export class ChatHipocratesComponent {
  chatList: {
    name: string;
    isEditing: boolean;
    messages: { text: string; user: boolean }[];
  }[] = [];
  activeChatIndex: number = 0; // Índice do chat ativo
  newMessage: string = '';
  hoveredChatIndex: number = -1; // Armazena o índice do chat em hover

  constructor() {
    this.addNewChat(); // Adiciona um chat inicial
  }

  // Adiciona um novo chat
  addNewChat() {
    const newChat = {
      name: `Nova conversa ${this.chatList.length + 1}`,
      isEditing: false,
      messages: [{ text: 'Bem-vindo à nova conversa!', user: false }],
    };
    this.chatList.push(newChat);
    this.activeChatIndex = this.chatList.length - 1; // Define o novo chat como ativo
  }

  // Seleciona um chat existente
  selectChat(index: number) {
    this.activeChatIndex = index;
  }

  // Envia uma mensagem
  sendMessage() {
    const activeChat = this.chatList[this.activeChatIndex];
    if (this.newMessage.trim()) {
      activeChat.messages.push({ text: this.newMessage, user: true });

      // Simula uma resposta automática
      setTimeout(() => {
        activeChat.messages.push({
          text: 'Resposta automática.',
          user: false,
        });
      }, 1000);

      this.newMessage = ''; // Limpa o campo de entrada
    }
  }

  // Edita o nome do chat
  editChatName(index: number) {
    this.chatList[index].isEditing = true; // Ativa o modo de edição
  }

  // Finaliza a edição do nome do chat
  finishEditingChatName(index: number) {
    this.chatList[index].isEditing = false; // Desativa o modo de edição
    if (!this.chatList[index].name.trim()) {
      this.chatList[index].name = `Conversa ${index + 1}`; // Valor padrão caso o campo fique vazio
    }
  }

  // Exclui um chat
  deleteChat(index: number) {
    if (confirm('Tem certeza de que deseja excluir este chat?')) {
      // Remove o chat da lista
      this.chatList.splice(index, 1);

      // Atualiza o índice do chat ativo
      if (this.chatList.length > 0) {
        // Se o chat excluído não era o último, mantém o chat anterior como ativo
        // Caso contrário, seleciona o chat anterior
        this.activeChatIndex = Math.min(this.activeChatIndex, this.chatList.length - 1);
      } else {
        this.activeChatIndex = -1; // Nenhum chat ativo
      }
    }
  }
}
