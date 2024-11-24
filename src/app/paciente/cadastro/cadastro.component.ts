import { Component } from '@angular/core';
import { ListaComponent } from "../lista/lista.component";
import { TabelaComponent } from "../tabela/tabela.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service.service';
import { CommonModule } from '@angular/common';
import { LoginMessageComponent } from '../../login-message/login-message.component';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ListaComponent,TabelaComponent, FormsModule,CommonModule, LoginMessageComponent, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  isUserLogged: boolean = false;
  employeeList: any[] = []; // Lista de pacientes
  showCadastro: boolean = false;
  showPacientes: boolean = false;


  onPacienteCadastrado(paciente: any) {
    this.employeeList.push(paciente); // Adiciona o paciente à lista
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

  togglePacientes() {
    this.showPacientes = !this.showPacientes;
    this.showCadastro = false;
    if (this.showPacientes) {
    }
  }

  toggleCadastro() {
    this.showCadastro = !this.showCadastro;
    this.showPacientes = false;
    if (this.showCadastro) {
    }
  }



}

