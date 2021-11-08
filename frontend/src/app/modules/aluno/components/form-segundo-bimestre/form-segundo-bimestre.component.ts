import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-form-segundo-bimestre',
  templateUrl: './form-segundo-bimestre.component.html',
  styleUrls: ['./form-segundo-bimestre.component.css']
})
export class FormSegundoBimestreComponent implements OnInit {
  formSegundoBimestre: FormGroup;
  params: Aluno;

  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.formularioSegundoBimestre();
    this.populaDadosFormulario();
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

  populaDadosFormulario() {
    const id = this.route.snapshot.paramMap.get('id');

    this.api.getAlunoById(id).subscribe(dados => {
      this.formSegundoBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        bimestres: this.fb.array([{
          n1: dados.bimestres[1].n1,
          n2: dados.bimestres[1].n2,
          n3: dados.bimestres[1].n3,
          n4: dados.bimestres[1].n4,
          faltas: dados.bimestres[1].faltas
        }]),
      });
    });
  }

  salvarDadosFormulario() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.api.atualizaBimestre(id, this.params).subscribe(dados =>{
        console.log(dados);
    });
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
