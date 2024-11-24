import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { CadastrousuarioComponent } from './usuario/cadastrousuario/cadastrousuario.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PerfilComponent } from './perfil/perfil.component';
import { WorkspacePageComponent } from './pages/workspace-page/workspace-page.component';


export const routes: Routes = [ 
    {path: "", component: HomepageComponent},
    {path: "login", component: LoginpageComponent},
    {path: "cadastro", component: CadastrousuarioComponent},
    {path: "perfil", component: UserProfileComponent},
    {path: "oi", component: PerfilComponent},
    {path: "workspace", component: WorkspacePageComponent},




    

];


export class AppRoutingModule { }