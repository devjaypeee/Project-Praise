import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { ElibraryComponent } from './main/elibrary/elibrary.component';
import { MainComponent } from './main/main.component';
import { ModuleComponent } from './main/module/module.component';
import { ProjSharpComponent } from './main/proj-sharp/proj-sharp.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { StudentsComponent } from './main/students/students.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main', canActivate:[AuthGuard], component: MainComponent,
  children: [
    { path: 'modules/:les/:id', component: ModuleComponent, canActivate:[AuthGuard]},
    { path: 'elibrary', canActivate:[AuthGuard], component: ElibraryComponent },
    { path: 'aboutus', component: AboutusComponent, canActivate:[AuthGuard]},
    { path: 'projsharp', component: ProjSharpComponent, canActivate:[AuthGuard]},
    { path: 'students', component: StudentsComponent, canActivate:[AuthGuard]}
    ]},  
  { path: 'quiz/:id/:qty/:mod/:les', component: QuizComponent, canActivate:[AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
