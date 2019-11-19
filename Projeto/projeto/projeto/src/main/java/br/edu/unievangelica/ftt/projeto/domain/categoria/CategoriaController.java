package br.edu.unievangelica.ftt.projeto.domain.categoria;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unievangelica.ftt.projeto.core.controller.AbstractController;


@RestController
@RequestMapping("/api/categoria")
public class CategoriaController extends AbstractController<Categoria> {

}
