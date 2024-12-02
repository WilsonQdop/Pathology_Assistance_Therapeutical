import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginMessageComponent } from '../../../utilitarios/login-message/login-message.component';
import { AuthService } from '../../../auth-service.service';
import { ChatHipocratesComponent } from '../../chat-hipocrates/chat-hipocrates.component';
import { HomeWorkspaceComponent } from '../workspace-content/home-workspace/home-workspace.component';
import { TabelaComponent } from '../workspace-content/paciente/tabela/tabela.component';
import { ListaComponent } from '../workspace-content/paciente/lista/lista.component';

@Component({
  selector: 'app-workspace-page',
  standalone: true,
  imports: [FormsModule, CommonModule,LoginMessageComponent, ChatHipocratesComponent, HomeWorkspaceComponent, TabelaComponent, ListaComponent],
  templateUrl: './workspace-page.component.html',
  styleUrl: './workspace-page.component.css'
})
export class WorkspacePageComponent {
  isUserLogged: boolean = false;
  username: string = '';
  employeeList: any[] = [{
    nome: "João Silva",
    email: "joao.silva@email.com",
    celular: "(11) 91234-5678",
    cidade: "São Paulo",
    estado: "SP",
    codigoPin: "1234",
    cpf: "123.456.789-00",
    endereco: "Av. Paulista, 1000"
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    celular: "(21) 99876-5432",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    codigoPin: "5678",
    cpf: "987.654.321-00",
    endereco: "Rua das Flores, 50"
  },
  {
    nome: "Carlos Santos",
    email: "carlos.santos@email.com",
    celular: "(31) 93456-7890",
    cidade: "Belo Horizonte",
    estado: "MG",
    codigoPin: "9101",
    cpf: "456.789.123-00",
    endereco: "Av. Contorno, 300"
  },
  {
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    celular: "(41) 91234-8765",
    cidade: "Curitiba",
    estado: "PR",
    codigoPin: "1122",
    cpf: "321.654.987-00",
    endereco: "Rua XV de Novembro, 150"
  },
  {
    nome: "Pedro Lima",
    email: "pedro.lima@email.com",
    celular: "(51) 92345-6789",
    cidade: "Porto Alegre",
    estado: "RS",
    codigoPin: "3344",
    cpf: "789.123.456-00",
    endereco: "Av. Ipiranga, 200"
  }]; // Lista de pacientes
  showCadastro: boolean = false;
  showPacientes: boolean = false;
  showHomeWorkspace: boolean = true;
  showDashboard: boolean = false;
  showSuporte: boolean = false;
  showPacienteWorkspace: boolean = false;
  chatOn: boolean = false;



  onPacienteCadastrado(paciente: any) {
    this.employeeList.push(paciente); // Adiciona o paciente à lista
  }




  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.getLoginStatusObservable().subscribe((status: boolean) => {
      this.isUserLogged = status;
    });

    this.authService.getChatStatusObservable().subscribe((status: boolean) => {
      this.chatOn = status;
    });

  }

  toggleTemplate() {
    this.isUserLogged = !this.isUserLogged;
    if (this.isUserLogged) {
    }
  }

  toggleSection(section: string) {
    this.showPacientes = false;
    this.showCadastro = false;
    this.showHomeWorkspace = false;
    this.showDashboard = false;
    this.showSuporte = false;
  
    switch (section) {
      case 'Pacientes':
        this.showPacientes = true;
        break;
      case 'Cadastro':
        this.showCadastro = true;
        break;
      case 'HomeWorkspace':
        this.showHomeWorkspace = true;
        break;
      case 'Dashboard':
        this.showDashboard = true;
        break;
      case 'Suporte':
        this.showSuporte = true;
        break;
    }
  }


  
}
