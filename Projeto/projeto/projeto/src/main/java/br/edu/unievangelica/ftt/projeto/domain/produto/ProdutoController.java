package br.edu.unievangelica.ftt.projeto.domain.produto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.edu.unievangelica.ftt.projeto.core.controller.AbstractController;



@RestController
@RequestMapping("/api/produto")
public class ProdutoController extends AbstractController<Produto> {

}
