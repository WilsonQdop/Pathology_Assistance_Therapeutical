import { Component } from '@angular/core';
import { ListaComponent } from "../lista/lista.component";
import { TabelaComponent } from "../tabela/tabela.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service.service';
import { CommonModule } from '@angular/common';
import { LoginMessageComponent } from '../../login-message/login-message.component';
import { HomeWorkspaceComponent } from '../../home-workspace/home-workspace.component';
import { PacienteWorkspaceComponent } from '../../paciente-workspace/paciente-workspace.component';




@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ListaComponent,TabelaComponent, FormsModule,CommonModule, LoginMessageComponent, CommonModule,HomeWorkspaceComponent, PacienteWorkspaceComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  isUserLogged: boolean = false;
  username: string = '';
  employeeList: any[] = []; // Lista de pacientes
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

