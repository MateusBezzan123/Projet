package br.edu.unievangelica.ftt.projeto.domain.produto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.edu.unievangelica.ftt.projeto.core.entity.AbstractEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "produto")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Produto  extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "produto_id_seq")
    @SequenceGenerator(name = "produto_id_seq", sequenceName = "produto_id_seq", allocationSize = 1)
    @Column(name = "id")
    private long id;

    @NotNull
    @Column(name = "tipo")
    private String tipo;


   

}