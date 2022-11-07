import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
