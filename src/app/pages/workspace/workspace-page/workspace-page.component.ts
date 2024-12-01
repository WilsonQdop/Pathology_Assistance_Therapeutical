import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginMessageComponent } from '../../../login-message/login-message.component';
import { AuthService } from '../../../auth-service.service';
import { CadastroComponent } from '../../../paciente/cadastro/cadastro.component';

@Component({
  selector: 'app-workspace-page',
  standalone: true,
  imports: [FormsModule, CommonModule,LoginMessageComponent,CadastroComponent],
  templateUrl: './workspace-page.component.html',
  styleUrl: './workspace-page.component.css'
})
export class WorkspacePageComponent {
  isUserLogged: boolean = false;
  showCadastro = true;
  showPacientes = false;
  employeeList: any[] = []; // Lista de pacientes

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
}
