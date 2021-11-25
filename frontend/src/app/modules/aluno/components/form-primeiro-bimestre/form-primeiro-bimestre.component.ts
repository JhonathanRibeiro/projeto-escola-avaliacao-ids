import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../aluno.service';
import { paramsPrimeiroBimestre } from '../../helpers/params';

@Component({
  selector: 'app-form-primeiro-bimestre',
  templateUrl: './form-primeiro-bimestre.component.html'
})
export class FormPrimeiroBimestreComponent implements OnInit {
  formPrimeiroBimestre: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.formularioPrimeiroBimestre();
    this.populaDadosFormulario();
  }

  public populaDadosFormulario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(dados => {
      this.formPrimeiroBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        primeira_nota_primeiro_bimestre: [dados.bimestres[0].n1, Validators.required],
        segunda_nota_primeiro_bimestre: [dados.bimestres[0].n2,Validators.required],
        terceira_nota_primeiro_bimestre: [dados.bimestres[0].n3,Validators.required],
        quarta_nota_primeiro_bimestre: [dados.bimestres[0].n4,Validators.required],
        faltas_primeiro_bimestre: [dados.bimestres[0].faltas, Validators.required]
      });
    });
  }

  public formularioPrimeiroBimestre(): void {
    this.formPrimeiroBimestre = this.fb.group({
      primeira_nota_primeiro_bimestre: [''],
      segunda_nota_primeiro_bimestre: [''],
      terceira_nota_primeiro_bimestre: [''],
      quarta_nota_primeiro_bimestre: [''],
      faltas_primeiro_bimestre: ['']
    });
  }

  public salvarDadosFormulario(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunoById(id).subscribe(dados => {
      try {
        const params = paramsPrimeiroBimestre(dados, this.formPrimeiroBimestre);
        if(params && params !== null) {
          this.api.atualizaBimestre(id, params).subscribe(dados =>{console.log(dados)});
        } else {
          throw new Error('Não foi possível atualizar as notas.');
        }
      } catch (error) {
        console.log(error);
      }
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