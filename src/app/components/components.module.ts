import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [NavbarComponent, HomeComponent, HijoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
