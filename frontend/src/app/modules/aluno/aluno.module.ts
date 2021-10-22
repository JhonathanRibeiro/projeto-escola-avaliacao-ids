import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPrimeiroBimestreComponent } from './components/form-primeiro-bimestre/form-primeiro-bimestre.component';
import { FormSegundoBimestreComponent } from './components/form-segundo-bimestre/form-segundo-bimestre.component';
import { FormTerceiroBimestreComponent } from './components/form-terceiro-bimestre/form-terceiro-bimestre.component';
import { FormQuartoBimestreComponent } from './components/form-quarto-bimestre/form-quarto-bimestre.component';
import { TableHeadComponent } from './components/table-head/table-head.component';

@NgModule({
  declarations: [
    FormPrimeiroBimestreComponent, 
    FormSegundoBimestreComponent, 
    FormTerceiroBimestreComponent, 
    FormQuartoBimestreComponent, TableHeadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlunoModule { }
