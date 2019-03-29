import { LogoutComponent } from './logout/logout.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


const routes: Routes = [{path: 'loginpage', component : LoginComponent},
{path: '', component : LoginComponent},
{path: 'home', component : HomeComponent, canActivate: [AuthGuard]},
{path: 'logout', component : LogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
