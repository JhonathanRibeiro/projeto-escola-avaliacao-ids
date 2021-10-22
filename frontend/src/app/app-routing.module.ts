import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista-alunos', pathMatch: 'full' },
  // { path: '**', redirectTo: 'lista-alunos'},
  { path: 'lancarnotas/:id', loadChildren: () => import('./modules/aluno/lancarnotas/lancarnotas.module').then(m => m.LancarnotasModule) },
  { path: 'diario-escolar/:id', loadChildren: () => import('./modules/aluno/diario-escolar/diario-escolar.module').then(m => m.DiarioEscolarModule) },
  { path: 'lista-alunos', loadChildren: () => import('./modules/aluno/lista-alunos/lista-alunos.module').then(m => m.ListaAlunosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
