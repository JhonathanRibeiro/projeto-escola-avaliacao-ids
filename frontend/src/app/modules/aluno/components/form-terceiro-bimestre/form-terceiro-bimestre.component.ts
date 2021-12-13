import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlunoService } from '../../aluno.service';
import { paramsTerceiroBimestre } from '../../helpers/params';

@Component({
  selector: 'app-form-terceiro-bimestre',
  templateUrl: './form-terceiro-bimestre.component.html',
  styleUrls: ['./form-terceiro-bimestre.component.css']
})
export class FormTerceiroBimestreComponent implements OnInit {
  formTerceiroBimestre: FormGroup;
  indiceTerceiroBimestre = 2;
  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.formularioTerceiroBimestre();
    this.populaDadosFormulario();
  }

 public populaDadosFormulario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(dados => {
      this.formTerceiroBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        primeira_nota_terceiro_bimestre: dados.bimestres[this.indiceTerceiroBimestre].n1,
        segunda_nota_terceiro_bimestre: dados.bimestres[this.indiceTerceiroBimestre].n2,
        terceira_nota_terceiro_bimestre: dados.bimestres[this.indiceTerceiroBimestre].n3,
        quarta_nota_terceiro_bimestre: dados.bimestres[this.indiceTerceiroBimestre].n4,
        faltas_terceiro_bimestre: dados.bimestres[this.indiceTerceiroBimestre].faltas
      });
    });
  }

  public formularioTerceiroBimestre(): void {
    this.formTerceiroBimestre = this.fb.group({
      primeira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required,])],
      segunda_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      faltas_terceiro_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  public salvarDadosFormulario(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunoById(id).subscribe(dados => {
      try {
        const params = paramsTerceiroBimestre(dados, this.formTerceiroBimestre);
        if(params && params !== null) {
          this.messageService.add({ severity: 'success', summary: '', detail: `Dados do aluno ${dados.nome} atualizados com sucesso.`})
          this.api.atualizaBimestre(id, params).subscribe(dados =>{console.log(dados)});
        } else {
          throw new Error('Não foi possível atualizar as notas.');
        }
      } catch (error) {
        this.messageService.add({ severity: 'Error', summary: '', detail: `${error.message}`});
      }
    });
  }

  get primeira_nota_terceiro_bimestre() {return this.formTerceiroBimestre.get('primeira_nota_terceiro_bimestre');}
    
  get segunda_nota_terceiro_bimestre() {return this.formTerceiroBimestre.get('segunda_nota_terceiro_bimestre');}

  get terceira_nota_terceiro_bimestre() {return this.formTerceiroBimestre.get('terceira_nota_terceiro_bimestre');}

  get quarta_nota_terceiro_bimestre() {return this.formTerceiroBimestre.get('quarta_nota_terceiro_bimestre');}

  get faltas_terceiro_bimestre() {return this.formTerceiroBimestre.get('faltas_terceiro_bimestre');}
}