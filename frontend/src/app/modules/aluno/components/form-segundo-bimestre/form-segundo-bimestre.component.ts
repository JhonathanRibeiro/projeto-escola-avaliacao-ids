import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlunoService } from '../../aluno.service';
import { paramsSegundoBimestre } from '../../helpers/params';

@Component({
  selector: 'app-form-segundo-bimestre',
  templateUrl: './form-segundo-bimestre.component.html',
  styleUrls: ['./form-segundo-bimestre.component.css']
})
export class FormSegundoBimestreComponent implements OnInit {
  formSegundoBimestre: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.formularioSegundoBimestre();
    this.populaDadosFormulario();
  }

  public populaDadosFormulario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(dados => {
      this.formSegundoBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        primeira_nota_segundo_bimestre: dados.bimestres[1].n1,
        segunda_nota_segundo_bimestre: dados.bimestres[1].n2,
        terceira_nota_segundo_bimestre: dados.bimestres[1].n3,
        quarta_nota_segundo_bimestre: dados.bimestres[1].n4,
        faltas_segundo_bimestre: dados.bimestres[1].faltas
      });
    });
  }

  public formularioSegundoBimestre(): void {
    this.formSegundoBimestre = this.fb.group({
      primeira_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      faltas_segundo_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  public salvarDadosFormulario(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunoById(id).subscribe(dados => {
      try {
        const params = paramsSegundoBimestre(dados, this.formSegundoBimestre);
        if(params && params !== null) {
          this.api.atualizaBimestre(id, params).subscribe(dados =>{console.log(dados)});
          this.messageService.add({ severity: 'success', summary: '', detail: `Dados do aluno ${dados.nome} atualizados com sucesso.` });
        } else {
          throw new Error('Não foi possível atualizar as notas.');
        }
      } catch (error) {
        this.messageService.add({ severity: 'error', summary: 'Server Error', detail: `${error.message}` });
      }
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