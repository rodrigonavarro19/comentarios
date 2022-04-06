package com.rodrigo.comentario.models.services;

import java.util.List;

import com.rodrigo.comentario.models.entity.Comentario;
import com.rodrigo.comentario.models.entity.Region;

public interface IComentarioService {
	
	public List<Comentario> findAll();
	
	public Comentario findById(Long id);
	
	public Comentario save(Comentario comentario);
	
	public void delete(Long id);
	
	public List<Region> findAllRegiones();
	
	public Region findRegionById(Long id);

}
