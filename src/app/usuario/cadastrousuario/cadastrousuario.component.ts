import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importando o Router


interface User {
  firstname: string;
  lastname: string;
  email: string;
  cpf: string;
  phone: string;
  address: string;
  dob: string;
  password: string;
  username: string;
}

@Component({
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css'],
})
export class CadastrousuarioComponent {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  cpf: string = "";
  phone: string = "";
  address: string = "";
  dob: string = ""; 
  password: string = "";
  username: string = "";

  constructor(private router: Router) {}

    
  onSubmit() {
    const firstname = this.firstname;
    const lastname = this.lastname; 
    const email = this.email;
    const cpf = this.cpf;
    const phone = this.phone;
    const address = this.address;
    const dob = this.dob;
    const password = this.password;
    const username = this.username;
  
    this.clearErrorMessages();
  
    let isValid = true;
    if (!this.firstname) this.showErrorMessage('firstname-error', 'Insira o nome'), (isValid = false);
    if (!this.lastname) this.showErrorMessage('lastname-error', 'Insira o sobrenome'), (isValid = false);
    if (!this.email) this.showErrorMessage('email-error', 'Insira o email'), (isValid = false);
    if (!this.cpf) this.showErrorMessage('cpf-error', 'Insira o CPF'), (isValid = false);
    if (!this.phone) this.showErrorMessage('phone-error', 'Insira o telefone'), (isValid = false);
    if (!this.address) this.showErrorMessage('address-error', 'Insira o endereço'), (isValid = false);
    if (!this.dob) this.showErrorMessage('dob-error', 'Insira a data de nascimento'), (isValid = false);
    if (!this.password) this.showErrorMessage('password-error', 'Insira a senha'), (isValid = false);
    if (!this.username) this.showErrorMessage('username-error', 'Insira o nome de usuário'), (isValid = false);
  
    if (!isValid) return;
  
    const user: User = { firstname, lastname, email, cpf, phone, address, dob, password, username };
  
    const users = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Verificação de duplicatas
    const isEmailDuplicate = users.some((u: User) => u.email === this.email);
    const isCpfDuplicate = users.some((u: User) => u.cpf === this.cpf);
    const isUsernameDuplicate = users.some((u: User) => u.username === this.username);
  
    if (isEmailDuplicate) {
      this.showErrorMessage('email-error', 'Email já cadastrado. Tente outro.');
      return;
    }
  
    if (isCpfDuplicate) {
      this.showErrorMessage('cpf-error', 'CPF já cadastrado. Tente outro.');
      return;
    }
  
    if (isUsernameDuplicate) {
      this.showErrorMessage('username-error', 'Nome de usuário já cadastrado. Tente outro.');
      return;
    }
  
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Logando o vetor de usuários no console
    console.log(users);
  
    // Exibe a animação de sucesso
    this.showSuccessAnimation();
  
    // Redireciona para a página de login após 2 segundos (tempo da animação)
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // Atraso de 2 segundos para permitir que a animação termine
  }
  

  showSuccessAnimation() {
    // Exibir a animação de sucesso
    const confirmationMessage = document.getElementById('confirmation-message') as HTMLElement;

    // Tornar o ícone e a mensagem visíveis com animações
    confirmationMessage.classList.add('visible');
  }

  clearErrorMessages() {
    // Limpa todas as mensagens de erro
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((element) => {
      element.textContent = '';
    });
  }

  showErrorMessage(elementId: string, message: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  getUsers(): User[] {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users;
  }
}
