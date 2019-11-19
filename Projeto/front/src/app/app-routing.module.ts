import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pais', loadChildren: './domain/pais/pais.module#PaisModule' },
  { path: 'categoria', loadChildren: './domain/categoria/categoria.module#CategoriaModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
