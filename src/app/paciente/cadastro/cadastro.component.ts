import { Component } from '@angular/core';
import { ListaComponent } from "../lista/lista.component";
import { TabelaComponent } from "../tabela/tabela.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service.service';
import { CommonModule } from '@angular/common';
import { LoginMessageComponent } from '../../login-message/login-message.component';
import { HomeWorkspaceComponent } from '../../home-workspace/home-workspace.component';




@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ListaComponent,TabelaComponent, FormsModule,CommonModule, LoginMessageComponent, CommonModule,HomeWorkspaceComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
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


  onPacienteCadastrado(paciente: any) {
    this.employeeList.push(paciente); // Adiciona o paciente à lista
  }

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.getLoginStatusObservable().subscribe((status: boolean) => {
      this.isUserLogged = status;
    });

    this.authService.getUsernameObservable().subscribe((username: string | null) => {
      this.username = username || '';
    });

  }

  toggleTemplate() {
    this.isUserLogged = !this.isUserLogged;
    if (this.isUserLogged) {
    }
  }

  togglePacientes() {
    this.showPacientes = !this.showPacientes;
    this.showCadastro = false;
    this.showHomeWorkspace = false;
    this.showDashboard = false;
    this.showSuporte = false;
    if (this.showPacientes) {
    }
  }

  toggleCadastro() {
    this.showCadastro = !this.showCadastro;
    this.showPacientes = false;
    this.showHomeWorkspace = false;
    this.showDashboard = false;
    this.showSuporte = false;
    if (this.showCadastro) {
    }
  }

  toggleHomeWorkspace() {
    this.showHomeWorkspace = !this.showHomeWorkspace;
    this.showDashboard = false;
    this.showSuporte = false;
    this.showPacientes = false;
    this.showCadastro = false;
    if (this.showHomeWorkspace) {
    }
  }

  toggleDashboard() {
    this.showDashboard = !this.showDashboard;
    this.showHomeWorkspace = false;
    this.showSuporte = false;
    this.showPacientes = false;
    this.showCadastro = false;
    if (this.showDashboard) {
    }
  }

  toggleSuporte() {
    this.showSuporte = !this.showSuporte;
    this.showHomeWorkspace = false;
    this.showDashboard = false;
    this.showPacientes = false;
    this.showCadastro = false;
    if (this.showSuporte) {
    }
  }



}

