import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-terceiro-bimestre',
  templateUrl: './form-terceiro-bimestre.component.html',
  styleUrls: ['./form-terceiro-bimestre.component.css']
})
export class FormTerceiroBimestreComponent implements OnInit {
  formTerceiroBimestre: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioTerceiroBimestre();
  }

  formularioTerceiroBimestre() {
    this.formTerceiroBimestre = this.fb.group({
      primeira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      faltas_terceiro_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  salvarDadosFormulario() {

  }

  get primeira_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('primeira_nota_terceiro_bimestre');
  }
  
  get faltas_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('faltas_terceiro_bimestre');
  }
  
  get segunda_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('primeira_nota_terceiro_bimestre');
  }

  get terceira_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('primeira_nota_terceiro_bimestre');
  }

  get quarta_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('primeira_nota_terceiro_bimestre');
  }
}
