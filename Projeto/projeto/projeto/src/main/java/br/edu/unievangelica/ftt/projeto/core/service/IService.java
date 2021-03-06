package br.edu.unievangelica.ftt.projeto.core.service;
import java.util.List;

import org.springframework.validation.Errors;

public interface IService<T> {

	List<T> findAll();
	
	T findById(long id);
	
	T save(T object, Errors errors);
	
	void deleteById(long id);
}
