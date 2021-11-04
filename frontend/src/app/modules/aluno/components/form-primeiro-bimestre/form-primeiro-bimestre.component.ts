import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-form-primeiro-bimestre',
  templateUrl: './form-primeiro-bimestre.component.html',
  styleUrls: ['./form-primeiro-bimestre.component.css']
})

export class FormPrimeiroBimestreComponent implements OnInit {
  formPrimeiroBimestre: FormGroup;
  aluno: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
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
    this.formPrimeiroBimestre.patchValue({
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

  salvarDadosFormulario() {
    console.log(this.formPrimeiroBimestre.value);
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    var obj: [] = this.formPrimeiroBimestre.value;

    this.api.atualizaBimestre(id, obj).subscribe(data =>{
      console.log(data);
      this.formPrimeiroBimestre.patchValue({
        nome: data.nome,
        matricula: data.matricula,
        status: data.status,
        situacao: data.situacao,
        primeira_nota_primeiro_bimestre: data.bimestres[0].n1,
        segunda_nota_primeiro_bimestre: data.bimestres[0].n2,
        terceira_nota_primeiro_bimestre: data.bimestres[0].n3,
        quarta_nota_primeiro_bimestre: data.bimestres[0].n4,
        faltas_primeiro_bimestre: data.bimestres[0].faltas
      });
    });
  }
}
