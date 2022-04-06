import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComentarioRoutingModule } from './comentario-routing.module';
import { PrimengModule } from '../primeng/primeng.module';

import { ComentariosListaComponent } from './pages/comentarios-lista/comentarios-lista.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    ComentariosListaComponent,
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComentarioRoutingModule,
    PrimengModule,
    
  ]
})
export class ComentarioModule { }
