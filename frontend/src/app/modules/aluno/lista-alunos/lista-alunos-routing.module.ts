import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAlunosComponent } from './lista-alunos.component';

const routes: Routes = [{ path: '', component: ListaAlunosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAlunosRoutingModule { }
