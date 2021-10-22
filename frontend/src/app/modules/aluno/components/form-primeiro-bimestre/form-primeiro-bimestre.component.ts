import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-primeiro-bimestre',
  templateUrl: './form-primeiro-bimestre.component.html',
  styleUrls: ['./form-primeiro-bimestre.component.css']
})
export class FormPrimeiroBimestreComponent implements OnInit {
  formPrimeiroBimestre: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioPrimeiroBimestre();
  }

  formularioPrimeiroBimestre() {
    this.formPrimeiroBimestre = this.fb.group({
      primeira_nota_primeiro_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_primeiro_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_primeiro_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_primeiro_bimestre: ['', Validators.compose([Validators.required])],
      faltas_primeiro_bimestre: ['', Validators.compose([Validators.required])]
    });
  }

  salvarDadosFormulario() {
    alert('teste');
  }

  get primeira_nota_primeiro_bimestre() {
    return this.formPrimeiroBimestre.get('primeira_nota_primeiro_bimestre');
  }

  get faltas_primeiro_bimestre() {
    return this.formPrimeiroBimestre.get('faltas_primeiro_bimestre');
  }

  get segunda_nota_primeiro_bimestre() {
    return this.formPrimeiroBimestre.get('segunda_nota_primeiro_bimestre');
  }

  get terceira_nota_primeiro_bimestre() {
    return this.formPrimeiroBimestre.get('terceira_nota_primeiro_bimestre');
  }

  get quarta_nota_primeiro_bimestre() {
    return this.formPrimeiroBimestre.get('quarta_nota_primeiro_bimestre');
  }
}
