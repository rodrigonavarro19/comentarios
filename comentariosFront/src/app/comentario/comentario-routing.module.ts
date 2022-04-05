import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosListaComponent } from './pages/comentarios-lista/comentarios-lista.component';

const routes: Routes = [
  {path:'lista', component: ComentariosListaComponent},
  {path:'**', redirectTo:'lista'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentarioRoutingModule { }
