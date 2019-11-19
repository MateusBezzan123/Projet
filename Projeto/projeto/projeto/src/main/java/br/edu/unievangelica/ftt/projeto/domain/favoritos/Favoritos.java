package br.edu.unievangelica.ftt.projeto.domain.favoritos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.edu.unievangelica.ftt.projeto.core.entity.AbstractEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "favoritos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Favoritos  extends AbstractEntity {

    private static final long serialVersionUID = 1L;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "favoritos_id_seq")
    @SequenceGenerator(name = "favoritos_id_seq", sequenceName = "favoritos_id_seq", allocationSize = 1)
    @Column(name = "id")
    private long id;

    @NotNull
    @Column(name = "nome")
    private String nome;

    @NotNull
    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "senha")
    private String senha;

    @NotNull
    @Column(name = "tipo")
    private String tipo;

    @NotNull
    @Column(name = "cpf")
    private long cpf;

}