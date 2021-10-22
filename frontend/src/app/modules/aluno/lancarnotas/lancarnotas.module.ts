import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancarnotasRoutingModule } from './lancarnotas-routing.module';
import { LancarnotasComponent } from './lancarnotas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { FormPrimeiroBimestreComponent } from '../components/form-primeiro-bimestre/form-primeiro-bimestre.component';
import { FormSegundoBimestreComponent } from '../components/form-segundo-bimestre/form-segundo-bimestre.component';
import { FormTerceiroBimestreComponent } from '../components/form-terceiro-bimestre/form-terceiro-bimestre.component';
import { FormQuartoBimestreComponent } from '../components/form-quarto-bimestre/form-quarto-bimestre.component';
import { TableHeadComponent } from '../components/table-head/table-head.component';

@NgModule({
  declarations: [
    LancarnotasComponent, 
    FormPrimeiroBimestreComponent,
    FormSegundoBimestreComponent,
    FormTerceiroBimestreComponent,
    FormQuartoBimestreComponent,
    TableHeadComponent
  ],
  imports: [
    CommonModule,
    LancarnotasRoutingModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]  
})
export class LancarnotasModule { }
