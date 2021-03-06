import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list-component';


const routes: Routes = [
  { path: '', component: CategoriaListComponent },
  { path: 'novo', component: CategoriaFormComponent },
  { path: 'editar/:id', component: CategoriaFormComponent },
  { path: 'visualizar/:id', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule {}
