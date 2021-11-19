import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormPrimeiroBimestreComponent } from './components/form-primeiro-bimestre/form-primeiro-bimestre.component';
import { FormSegundoBimestreComponent } from './components/form-segundo-bimestre/form-segundo-bimestre.component';
import { FormTerceiroBimestreComponent } from './components/form-terceiro-bimestre/form-terceiro-bimestre.component';
import { FormQuartoBimestreComponent } from './components/form-quarto-bimestre/form-quarto-bimestre.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { IdentificadorAlunoComponent } from './components/identificador-aluno/identificador-aluno.component';

@NgModule({
  declarations: [
    FormPrimeiroBimestreComponent, 
    FormSegundoBimestreComponent, 
    FormTerceiroBimestreComponent, 
    FormQuartoBimestreComponent, TableHeadComponent, IdentificadorAlunoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AlunoModule { }
