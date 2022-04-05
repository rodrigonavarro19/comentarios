import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioRoutingModule } from './comentario-routing.module';
import { ComentariosListaComponent } from './pages/comentarios-lista/comentarios-lista.component';


@NgModule({
  declarations: [
    ComentariosListaComponent
  ],
  imports: [
    CommonModule,
    ComentarioRoutingModule
  ]
})
export class ComentarioModule { }
