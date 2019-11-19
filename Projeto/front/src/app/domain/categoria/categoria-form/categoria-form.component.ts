
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Validation from 'src/app/core/util/validation';
import { Pais } from '../../pais/pais';
import { PaisService } from '../../pais/pais.service';
import { AlertService } from 'src/app/core/alert/alet.service';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html'
})
export class CategoriaFormComponent implements OnInit {
  // Declarações de variáveis
  categoria: Categoria;
  paises: Pais[];
  categoriaForm: FormGroup;
  titulo: string;

  constructor(
    private categoriaService: CategoriaService,
    private paisService: PaisService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    // Instancia uma nova mantenedora
    this.categoria = new Categoria();

    // Obtem ID da mantenedora pela URL
    this.categoria.id = this.route.snapshot.params['id'];

    // Define título da página
    this.titulo = this.categoria.id ? 'Editar' : 'Cadastrar';

    // Reactive forms
    this.categoriaForm = this.builder.group(
      {
        id: [],
        nome: ['', [Validators.required, Validators.minLength(3)]],
        endereco: this.builder.group({
          id: [],
          logradouro: ['', Validators.required],
          complemento: ['', Validators.required],
          bairro: ['', Validators.required],
          cidade: ['', Validators.required],
          estado: ['', Validators.required],
          pais: ['', Validators.required]
        })
      },
      {}
    );

    // Busca a mantenedora caso seja o formulário de editar ou visualizar
    if (this.categoria.id) {
      this.categoriaService.findById(this.categoria.id).subscribe(categoria => this.categoriaForm.patchValue(categoria));
    }

    // Verifica se o formulário seja visualizar
    if (this.route.snapshot.url[0].path == 'visualizar') {
      // Desabilita o formulário
      this.categoriaForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }

    // Busca lista de paises
    this.paisService.findAll().subscribe(paises => (this.paises = paises));
  }

  // Marca a opção selecionada no select
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  // Método para salvar mantenedora
  onSave(categoria: Categoria) {
    // Verifica se o formulário esta inválido
    if (this.categoriaForm.invalid) {
      // Valida todos os campos do formulário
      Validation.allFormFields(this.categoriaForm);

      // Alerta com a mensagem de erro
      this.alertService.error('Por favor, preencha os campos obrigatórios!');
    } else {
      // Se o formulário estiver válido

      // Salva os dados na API
      this.categoriaService.save(categoria).subscribe(categoria => {
        // Alerta com a mensagem de sucesso
        this.alertService.success('Categoria salva com sucesso!');

        // Redireciona para lista de mantenedoras
        this.router.navigate(['/categoria']);
      });
    }
  }
}
