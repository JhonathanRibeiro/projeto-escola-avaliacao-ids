import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-quarto-bimestre',
  templateUrl: './form-quarto-bimestre.component.html',
  styleUrls: ['./form-quarto-bimestre.component.css']
})
export class FormQuartoBimestreComponent implements OnInit {
  formQuartoBimestre: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioQuartoBimestre();
  }

  formularioQuartoBimestre() {
    this.formQuartoBimestre = this.fb.group({
      primeira_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      faltas_quarto_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  salvarDadosFormulario() {
    
  }

  get primeira_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('primeira_nota_quarto_bimestre');
  }

  get segunda_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('primeira_nota_quarto_bimestre');
  }

  get terceira_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('primeira_nota_quarto_bimestre');
  }

  get quarta_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('primeira_nota_quarto_bimestre');
  }
}
