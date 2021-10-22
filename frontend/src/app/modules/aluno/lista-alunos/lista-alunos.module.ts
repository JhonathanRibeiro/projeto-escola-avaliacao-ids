import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAlunosRoutingModule } from './lista-alunos-routing.module';
import { ListaAlunosComponent } from './lista-alunos.component';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [ListaAlunosComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ListaAlunosRoutingModule,
    TableModule
  ]
})
export class ListaAlunosModule { }
