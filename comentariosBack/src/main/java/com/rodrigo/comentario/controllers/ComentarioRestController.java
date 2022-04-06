package com.rodrigo.comentario.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.rodrigo.comentario.models.entity.Comentario;
import com.rodrigo.comentario.models.entity.Region;
import com.rodrigo.comentario.models.services.IComentarioService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/comentarios")
public class ComentarioRestController {
	
	@Autowired
	private IComentarioService comentarioService;
	
	@GetMapping("/regiones")
	public List<Region> regiones(){
		return comentarioService.findAllRegiones();
	}
	
	@GetMapping("/listar")
	public List<Comentario> comentarios(){
		return comentarioService.findAll();
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> create(@RequestBody Comentario comentario){
		Map<String, Object> response = new HashMap<>();
		Comentario comentarioNew = null;
		Date date = new Date();
		comentario.setCreateAt(date);
		
		try {
		comentarioNew = comentarioService.save(comentario);
		}catch(DataAccessException e) {
			response.put("estado", false);
			response.put("mensaje", "El comentario no se ha podido guardar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		Region region = comentarioService.findRegionById(comentarioNew.getRegion().getId());
		comentarioNew.setRegion(region);
		
		response.put("estado", true);
		response.put("mensaje", "El comentario ha sido creado con exito!");
		response.put("comentario", comentarioNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);		
	} 
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update( @RequestBody Comentario comentario, @PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		
		Comentario comentarioActual = comentarioService.findById(id);
		Comentario comentarioActualizado = null;
		
		if(comentarioActual == null) {
			response.put("Error", "El comentario ID: ".concat(id.toString().concat(" no existe en la base de datos")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
			
		}
		
		try {
			
			comentarioActual.setEmail(comentario.getEmail());
			comentarioActual.setComentario(comentario.getComentario());
			comentarioActual.setRegion(comentario.getRegion());
			
			comentarioActualizado = comentarioService.save(comentarioActual);
			
		}catch (DataAccessException e) {
			response.put("estado", false);
			response.put("mensaje", "Error al actualizar el comentario en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
		Region region = comentarioService.findRegionById(comentarioActualizado.getRegion().getId());
		comentarioActualizado.setRegion(region);
		response.put("estado", true);
		response.put("mensaje", "El comentario ha sido actualizado con éxito!");
		response.put("comentario", comentarioActualizado);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		
		try{
			comentarioService.delete(id);
			
		}catch(DataAccessException e) {
			response.put("estado", false);
			response.put("mensaje", "Error al eliminar el comentario de la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("estado", true);
		response.put("mensaje", "Comentario eliminado con éxito!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

}
