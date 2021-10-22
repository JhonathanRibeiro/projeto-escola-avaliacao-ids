import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancarnotasComponent } from './lancarnotas.component';

const routes: Routes = [{ path: '', component: LancarnotasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancarnotasRoutingModule { }
