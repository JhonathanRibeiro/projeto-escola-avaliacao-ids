import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../aluno.service';

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
      primeira_nota_terceiro_bimestre: ['', Validators.compose([
        Validators.required,
        Validators.min(2)
      ])],
      segunda_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_terceiro_bimestre: ['', Validators.compose([Validators.required])],
      faltas_terceiro_bimestre: ['', Validators.compose([Validators.required])],
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
        bimestres: [
          {
            id: dados.bimestres[0].id,
            n1: dados.bimestres[0].n1,
            n2: dados.bimestres[0].n2,
            n3: dados.bimestres[0].n3,
            n4: dados.bimestres[0].n4,
            faltas: dados.bimestres[0].faltas
          },
          {
            id: dados.bimestres[1].id,
            n1: dados.bimestres[1].n1,
            n2: dados.bimestres[1].n2,
            n3: dados.bimestres[1].n3,
            n4: dados.bimestres[1].n4,
            faltas: dados.bimestres[1].faltas
          },
          {
            id: dados.bimestres[2].id,
            n1: this.formTerceiroBimestre.value.primeira_nota_terceiro_bimestre,
            n2: this.formTerceiroBimestre.value.segunda_nota_terceiro_bimestre,
            n3: this.formTerceiroBimestre.value.terceira_nota_terceiro_bimestre,
            n4: this.formTerceiroBimestre.value.quarta_nota_terceiro_bimestre,
            faltas: this.formTerceiroBimestre.value.faltas_terceiro_bimestre
          },
          {
            id: dados.bimestres[3].id,
            n1: dados.bimestres[3].n1,
            n2: dados.bimestres[3].n2,
            n3: dados.bimestres[3].n3,
            n4: dados.bimestres[3].n4,
            faltas: dados.bimestres[3].faltas
          }
       ]
      };
      console.log(obj)

      this.api.atualizaBimestre(id, obj).subscribe(dados =>{
          console.log(dados);
      });
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
