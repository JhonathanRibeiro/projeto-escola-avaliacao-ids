import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../aluno.service';

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
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.formularioSegundoBimestre();
    this.populaDadosFormulario();
  }

  populaDadosFormulario() {
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

  formularioSegundoBimestre() {
    this.formSegundoBimestre = this.fb.group({
      primeira_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_segundo_bimestre: ['', Validators.compose([Validators.required])],
      faltas_segundo_bimestre: ['', Validators.compose([Validators.required])],
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
            n1: this.formSegundoBimestre.value.primeira_nota_segundo_bimestre,
            n2: this.formSegundoBimestre.value.segunda_nota_segundo_bimestre,
            n3: this.formSegundoBimestre.value.terceira_nota_segundo_bimestre,
            n4: this.formSegundoBimestre.value.quarta_nota_segundo_bimestre,
            faltas: this.formSegundoBimestre.value.faltas_segundo_bimestre
          },
          {
            id: dados.bimestres[2].id,
            n1: dados.bimestres[2].n1,
            n2: dados.bimestres[2].n2,
            n3: dados.bimestres[2].n3,
            n4: dados.bimestres[2].n4,
            faltas: dados.bimestres[2].faltas
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
