import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ContactcomponentComponent } from './contactcomponent/contactcomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { CalculatorService } from './calculator.service';

const ROUTES: Routes=[
  { path:'homecomponent',component:HomecomponentComponent},
  {path:'contactcomponent',component:ContactcomponentComponent},
  {path:'aboutcomponent',component:AboutcomponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomecomponentComponent,
    ContactcomponentComponent,
    AboutcomponentComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
