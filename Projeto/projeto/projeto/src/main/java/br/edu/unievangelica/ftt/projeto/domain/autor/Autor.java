package br.edu.unievangelica.ftt.projeto.domain.autor;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



import br.edu.unievangelica.ftt.projeto.core.entity.AbstractEntity;
import br.edu.unievangelica.ftt.projeto.domain.livro.Livro;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "autor")
@Getter @Setter
public class Autor extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	
	     @Id
	    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "nome_id_seq")
	    @SequenceGenerator(name = "nome_id_seq", sequenceName = "nome_id_seq", allocationSize = 1)
	    @Column(name = "id")
	    private long id;

	    public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public List<Livro> getLivros() {
			return livros;
		}

		public void setLivros(List<Livro> livros) {
			this.livros = livros;
		}

		public static long getSerialversionuid() {
			return serialVersionUID;
		}

		@NotNull
	    @Column(name = "nome")
	    private String nome;

	    @OneToMany(fetch = FetchType.LAZY, mappedBy = "autor")
	    List<Livro> livros;
	
}
