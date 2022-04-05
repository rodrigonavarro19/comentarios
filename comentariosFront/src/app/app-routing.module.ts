import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'comentarios',
    loadChildren: () => import('./comentario/comentario.module').then(m => m.ComentarioModule)
  },
  {
    path:'**',
    redirectTo:'comentarios'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
