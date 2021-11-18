import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../aluno.service';
import { paramsTerceiroBimestre } from '../../helpers/params';

@Component({
  selector: 'app-form-terceiro-bimestre',
  templateUrl: './form-terceiro-bimestre.component.html',
  styleUrls: ['./form-terceiro-bimestre.component.css']
})
export class FormTerceiroBimestreComponent implements OnInit {
  formTerceiroBimestre: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formularioTerceiroBimestre();
    this.populaDadosFormulario();
  }

  populaDadosFormulario() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(dados => {
      this.formTerceiroBimestre = this.fb.group({
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        primeira_nota_terceiro_bimestre: dados.bimestres[2].n1,
        segunda_nota_terceiro_bimestre: dados.bimestres[2].n2,
        terceira_nota_terceiro_bimestre: dados.bimestres[2].n3,
        quarta_nota_terceiro_bimestre: dados.bimestres[2].n4,
        faltas_terceiro_bimestre: dados.bimestres[2].faltas
      });
    });
  }

  formularioTerceiroBimestre() {
    this.formTerceiroBimestre = this.fb.group({
      primeira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required,])],
      segunda_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      faltas_terceiro_bimestre: ['', Validators.compose([Validators.required])],
    });
  }

  salvarDadosFormulario() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunoById(id).subscribe(dados => {
      try {
        const params = paramsTerceiroBimestre(dados, this.formTerceiroBimestre);
        this.api.atualizaBimestre(id, params).subscribe(dados =>{console.log(dados);});
       } catch (error) {
         console.log(`Não foi possível atualizar as notas. Error: ${error}`);
       }
    });
  }

  get primeira_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('primeira_nota_terceiro_bimestre');
  }
    
  get segunda_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('segunda_nota_terceiro_bimestre');
  }

  get terceira_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('terceira_nota_terceiro_bimestre');
  }

  get quarta_nota_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('quarta_nota_terceiro_bimestre');
  }

  get faltas_terceiro_bimestre() {
    return this.formTerceiroBimestre.get('faltas_terceiro_bimestre');
  }
}
