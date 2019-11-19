package br.edu.unievangelica.ftt.projeto.domain.favoritos;



import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unievangelica.ftt.projeto.core.controller.AbstractController;


@RestController
@RequestMapping("/api/favoritos")
public class FavoritosController extends AbstractController<Favoritos> {

}