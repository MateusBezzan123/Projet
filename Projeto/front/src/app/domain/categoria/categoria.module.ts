import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list-component';


@NgModule({
  declarations: [CategoriaFormComponent, CategoriaListComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, CategoriaRoutingModule]
})
export class CategoriaModule {}
