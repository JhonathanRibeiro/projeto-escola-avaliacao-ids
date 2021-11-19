import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiarioEscolarRoutingModule } from './diario-escolar-routing.module';
import {TableModule} from 'primeng/table';

import { DiarioEscolarComponent } from './diario-escolar.component';

@NgModule({
  declarations: [
    DiarioEscolarComponent
  ],
  imports: [
    CommonModule,
    DiarioEscolarRoutingModule,
    TableModule
  ]
})
export class DiarioEscolarModule { }
