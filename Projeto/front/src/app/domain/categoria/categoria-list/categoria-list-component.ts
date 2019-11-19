
import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/alert/alet.service';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',

})
export class CategoriaListComponent implements OnInit {
  
  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService, private alertService: AlertService) {}

  ngOnInit() {
    
    this.categoriaService.findAll().subscribe(categorias => (this.categorias = categorias));
  }


  onDelete(id: number) {
    
    this.categoriaService.deteleById(id).subscribe(() => {

      this.categorias = this.categorias.filter(categoria => categoria.id !== id);

      this.alertService.success('Categoria excluída com sucesso!');
    });
  }
}
