package com.rodrigo.comentario.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rodrigo.comentario.models.entity.Comentario;
import com.rodrigo.comentario.models.entity.Region;

public interface IComentarioDao extends JpaRepository<Comentario, Long>{
	
	
	@Query("from Region")
	public List<Region> findAllRegiones();
	
	@Query("from Region r where r.id = :id")
	public Region findRegionById(Long id);

}
