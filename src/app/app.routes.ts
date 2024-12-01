import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage/loginpage.component';
import { CadastrousuarioComponent } from './pages/cadastro/cadastrousuario/cadastrousuario.component';
import { WorkspacePageComponent } from './pages/workspace/workspace-page/workspace-page.component';
import { DesenvolvedoresComponent } from './pages/desenvolvedores/desenvolvedores.component';
import { HomeComponent } from './pages/home/home/home.component';


export const routes: Routes = [ 
    {path: "", component: HomeComponent},
    {path: "login", component: LoginpageComponent},
    {path: "cadastro", component: CadastrousuarioComponent},
    {path: "workspace", component: WorkspacePageComponent},  
    {path: "desenvolvedores", component: DesenvolvedoresComponent},
];


export class AppRoutingModule { }