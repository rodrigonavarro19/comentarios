import { Component, OnInit } from '@angular/core';
import { ComentarioApiService } from '../../services/comentario-api.service';

@Component({
  selector: 'app-comentarios-lista',
  templateUrl: './comentarios-lista.component.html',
  styleUrls: ['./comentarios-lista.component.css']
})
export class ComentariosListaComponent implements OnInit {

  constructor(private comentarioApiService:ComentarioApiService) { }

  ngOnInit(): void {
    
  }

}
