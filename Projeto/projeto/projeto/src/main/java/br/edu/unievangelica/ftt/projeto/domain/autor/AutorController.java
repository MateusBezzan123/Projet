package br.edu.unievangelica.ftt.projeto.domain.autor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.edu.unievangelica.ftt.projeto.core.controller.AbstractController;



@RestController
@RequestMapping("/api/autor")
public class AutorController extends AbstractController<Autor> {

}
