import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../aluno.service';
import { paramsPrimeiroBimestre } from '../../helpers/params';
import { Message } from 'primeng/components/common/message';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-primeiro-bimestre',
  templateUrl: './form-primeiro-bimestre.component.html',
  providers: [MessageService]
})
export class FormPrimeiroBimestreComponent implements OnInit {
  formPrimeiroBimestre: FormGroup;

  msgs1: Message[];

  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.formularioPrimeiroBimestre();
    this.populaDadosFormulario();
  }

  public showError() {
    this.messageService.add({ severity: 'error', summary: 'Server error', detail: '500 error' });
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
        segunda_nota_primeiro_bimestre: [dados.bimestres[0].n2, Validators.required],
        terceira_nota_primeiro_bimestre: [dados.bimestres[0].n3, Validators.required],
        quarta_nota_primeiro_bimestre: [dados.bimestres[0].n4, Validators.required],
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
        if (params && params !== null) {
          this.api.atualizaBimestre(id, params).subscribe(dados => { console.log(dados) });
          this.messageService.add({ severity: 'success', summary: '', detail: '' });
        } else {
          throw new Error('Não foi possível atualizar as notas.');
        }
      } catch (error) {
        this.messageService.add({ severity: 'error', summary: 'Server error', detail: `${error.message}` });
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