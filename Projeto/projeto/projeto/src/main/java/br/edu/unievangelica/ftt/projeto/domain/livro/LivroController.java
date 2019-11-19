package br.edu.unievangelica.ftt.projeto.domain.livro;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.edu.unievangelica.ftt.projeto.core.controller.AbstractController;


@RestController
@RequestMapping("/api/livro")
public class LivroController extends AbstractController<Livro> {

}