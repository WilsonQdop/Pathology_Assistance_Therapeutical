import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { CadastrousuarioComponent } from './usuario/cadastrousuario/cadastrousuario.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { WorkspacePageComponent } from './pages/workspace-page/workspace-page.component';
import { ChatHipocratesComponent } from './chat-hipocrates/chat-hipocrates.component';


export const routes: Routes = [ 
    {path: "", component: HomepageComponent},
    {path: "login", component: LoginpageComponent},
    {path: "cadastro", component: CadastrousuarioComponent},
    {path: "perfil", component: UserProfileComponent},
    {path: "workspace", component: WorkspacePageComponent},
    {path: "hipo", component: ChatHipocratesComponent},






    

];


export class AppRoutingModule { }