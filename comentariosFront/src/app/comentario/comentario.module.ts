import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioRoutingModule } from './comentario-routing.module';
import { ComentariosListaComponent } from './pages/comentarios-lista/comentarios-lista.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    ComentariosListaComponent
  ],
  imports: [
    CommonModule,
    ComentarioRoutingModule,
    PrimengModule
  ]
})
export class ComentarioModule { }
