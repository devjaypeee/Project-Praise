import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModules } from './modules/material.module';

// Page Component
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ModuleComponent } from './main/module/module.component';
import { ElibraryComponent } from './main/elibrary/elibrary.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuizComponent } from './main/quiz/quiz.component';
import { ProjSharpComponent } from './main/proj-sharp/proj-sharp.component';
import { StudentsComponent } from './main/students/students.component';
import { AddStudentComponent } from './dialog/add-student/add-student.component';
import { EditStudentComponent } from './dialog/edit-student/edit-student.component';
import { SummaryComponent } from './dialog/summary/summary.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ModuleComponent,
    ElibraryComponent,
    AboutusComponent,
    QuizComponent,
    ProjSharpComponent,
    StudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
