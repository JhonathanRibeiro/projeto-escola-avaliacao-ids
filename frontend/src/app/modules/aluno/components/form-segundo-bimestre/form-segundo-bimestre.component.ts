import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-segundo-bimestre',
  templateUrl: './form-segundo-bimestre.component.html',
  styleUrls: ['./form-segundo-bimestre.component.css']
})
export class FormSegundoBimestreComponent implements OnInit {
  formSegundoBimestre: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioSegundoBimestre();
  }

  formularioSegundoBimestre() {
    this.formSegundoBimestre = this.fb.group({
      primeira_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      faltas_segundo_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  salvarDadosFormulario() {
    alert('teste segundo bimestre')
  }

  get primeira_nota_segundo_bimestre() {
    return this.formSegundoBimestre.get('primeira_nota_segundo_bimestre');
  }

  get faltas_segundo_bimestre() {
    return this.formSegundoBimestre.get('faltas_segundo_bimestre');
  }

  get segunda_nota_segundo_bimestre() {
    return this.formSegundoBimestre.get('segunda_nota_segundo_bimestre');
  }

  get terceira_nota_segundo_bimestre() {
    return this.formSegundoBimestre.get('terceira_nota_segundo_bimestre');
  }

  get quarta_nota_segundo_bimestre() {
    return this.formSegundoBimestre.get('quarta_nota_segundo_bimestre');
  }
}
