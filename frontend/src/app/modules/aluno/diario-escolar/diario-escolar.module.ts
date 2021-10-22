import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiarioEscolarRoutingModule } from './diario-escolar-routing.module';
import { DiarioEscolarComponent } from './diario-escolar.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [DiarioEscolarComponent],
  imports: [
    CommonModule,
    DiarioEscolarRoutingModule,
    TableModule
  ]
})
export class DiarioEscolarModule { }
