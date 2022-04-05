package com.rodrigo.comentario.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rodrigo.comentario.models.dao.IComentarioDao;
import com.rodrigo.comentario.models.entity.Comentario;
import com.rodrigo.comentario.models.entity.Region;

@Service
public class ComentarioServiceImpl implements IComentarioService {
	
	@Autowired
	private IComentarioDao comentarioDao;

	@Override
	@Transactional(readOnly = true)
	public List<Comentario> findAll() {
		
		return comentarioDao.findAll();
	}

	@Override
	@Transactional
	public Comentario save(Comentario comentario) {
		return comentarioDao.save(comentario);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		comentarioDao.deleteById(id);
		
	}

	@Override
	@Transactional(readOnly = true)
	public List<Region> findAllRegiones() {
		
		return comentarioDao.findAllRegiones();
	}

	@Override
	public Comentario findById(Long id) {
		 return comentarioDao.findById(id).orElse(null);
	}

}
