import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppComponent } from './app.component';
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { CadastrousuarioComponent } from './usuario/cadastrousuario/cadastrousuario.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


export const routes: Routes = [ 
    {path: "", component: HomepageComponent},
    {path: "login", component: LoginpageComponent},
    {path: "cadastroPacientes", component: CadastroComponent},
    {path: "sobre", component: AboutComponent},
    {path: "home", component: HomepageComponent},
    {path: "cadastro", component: CadastrousuarioComponent},
    {path: "perfil", component: UserProfileComponent}

    

];


export class AppRoutingModule { }