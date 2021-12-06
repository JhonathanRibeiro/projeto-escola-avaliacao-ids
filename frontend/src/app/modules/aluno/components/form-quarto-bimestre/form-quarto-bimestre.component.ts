import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlunoService } from '../../aluno.service';
import { paramsQuartoBimestre } from '../../helpers/params';

@Component({
  selector: 'app-form-quarto-bimestre',
  templateUrl: './form-quarto-bimestre.component.html',
  styleUrls: ['./form-quarto-bimestre.component.css']
})
export class FormQuartoBimestreComponent implements OnInit {
  formQuartoBimestre: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.formularioQuartoBimestre();
    this.populaDadosFormulario();
  }

  public populaDadosFormulario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(dados => {
      this.formQuartoBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        primeira_nota_quarto_bimestre: dados.bimestres[3].n1,
        segunda_nota_quarto_bimestre: dados.bimestres[3].n2,
        terceira_nota_quarto_bimestre: dados.bimestres[3].n3,
        quarta_nota_quarto_bimestre: dados.bimestres[3].n4,
        faltas_quarto_bimestre: dados.bimestres[3].faltas
      });
    });
  }

  public formularioQuartoBimestre(): void {
    this.formQuartoBimestre = this.fb.group({
      primeira_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      faltas_quarto_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  public salvarDadosFormulario(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunoById(id).subscribe(dados => {
      try {
        const params = paramsQuartoBimestre(dados, this.formQuartoBimestre);
        if(params && params !== null) {
          this.messageService.add({ severity: 'success', summary: '', detail: `Dados do aluno ${dados.nome} atualizados com sucesso.`})
          this.api.atualizaBimestre(id, params).subscribe(dados =>{console.log(dados)});
        } else {
          throw new Error('Não foi possível atualizar as notas.');
        }
      } catch (error) {
        this.messageService.add({ severity: 'error', summary: 'Server Error', detail: `${error.message}`});
      }
    });
  }

  get primeira_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('primeira_nota_quarto_bimestre');
  }

  get segunda_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('segunda_nota_quarto_bimestre');
  }

  get terceira_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('terceira_nota_quarto_bimestre');
  }

  get quarta_nota_quarto_bimestre() {
    return this.formQuartoBimestre.get('quarta_nota_quarto_bimestre');
  }

  get faltas_quarto_bimestre() {
    return this.formQuartoBimestre.get('faltas_quarto_bimestre');
  }
}