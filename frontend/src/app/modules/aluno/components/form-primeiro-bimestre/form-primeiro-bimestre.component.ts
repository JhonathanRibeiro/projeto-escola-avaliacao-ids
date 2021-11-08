import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../aluno.service';
import { Aluno } from 'src/app/models/aluno.model';

@Component({
  selector: 'app-form-primeiro-bimestre',
  templateUrl: './form-primeiro-bimestre.component.html',
  styleUrls: ['./form-primeiro-bimestre.component.css']
})

export class FormPrimeiroBimestreComponent implements OnInit {
  formPrimeiroBimestre: FormGroup;
  aluno: Aluno;
  data: any;

  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.formularioPrimeiroBimestre();
    this.populaDadosFormulario();
  }

  populaDadosFormulario() {
    const id = this.route.snapshot.paramMap.get('id');

    this.api.getAlunoById(id).subscribe(dados => {
      this.aluno = dados
      this.formPrimeiroBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        primeira_nota_primeiro_bimestre: dados.bimestres[0].n1,
        segunda_nota_primeiro_bimestre: dados.bimestres[0].n2,
        terceira_nota_primeiro_bimestre: dados.bimestres[0].n3,
        quarta_nota_primeiro_bimestre: dados.bimestres[0].n4,
        faltas_primeiro_bimestre: dados.bimestres[0].faltas
      });
    });
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
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunoById(id).subscribe(dados => {
      var obj = {
        id: dados.id,
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        bimestres: [{
          id: dados.bimestres[0].id,
          n1: dados.bimestres[0].n1,
          n2: dados.bimestres[0].n2,
          n3: dados.bimestres[0].n3,
          n4: dados.bimestres[0].n4,
          faltas: dados.bimestres[0].faltas
        }]
      };

      this.api.atualizaBimestre(id, obj).subscribe(dados =>{
          console.log(dados);
      });
    });
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
