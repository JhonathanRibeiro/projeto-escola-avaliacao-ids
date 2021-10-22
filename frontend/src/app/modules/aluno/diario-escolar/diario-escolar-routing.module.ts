import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioEscolarComponent } from './diario-escolar.component';

const routes: Routes = [{ path: '', component: DiarioEscolarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiarioEscolarRoutingModule { }
