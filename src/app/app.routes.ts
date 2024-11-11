import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AboutComponent } from './about/about.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CadastrousuarioComponent } from './cadastrousuario/cadastrousuario.component';


export const routes: Routes = [ 
    {path: "", component: HomepageComponent},
    {path: "cadastroPacientes", component: CadastroComponent},
    {path: "sobre", component: AboutComponent},
    {path: "login", component: LoginpageComponent},
    {path: "cadastro", component: CadastrousuarioComponent},

];


export class AppRoutingModule { }