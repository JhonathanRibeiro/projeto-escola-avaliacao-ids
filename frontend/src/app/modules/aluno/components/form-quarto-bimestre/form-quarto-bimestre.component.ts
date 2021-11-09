import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../aluno.service';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formularioQuartoBimestre();
    this.populaDadosFormulario();
  }

  populaDadosFormulario() {
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

  formularioQuartoBimestre() {
    this.formQuartoBimestre = this.fb.group({
      primeira_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      segunda_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      terceira_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      quarta_nota_quarto_bimestre: ['', Validators.compose([Validators.required])],
      faltas_quarto_bimestre: ['', Validators.compose([Validators.required])],
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
            n1: dados.bimestres[2].n1,
            n2: dados.bimestres[2].n2,
            n3: dados.bimestres[2].n3,
            n4: dados.bimestres[2].n4,
            faltas: dados.bimestres[2].faltas
          },
          {
            id: dados.bimestres[3].id,
            n1: this.formQuartoBimestre.value.primeira_nota_quarto_bimestre,
            n2: this.formQuartoBimestre.value.segunda_nota_quarto_bimestre,
            n3: this.formQuartoBimestre.value.terceira_nota_quarto_bimestre,
            n4: this.formQuartoBimestre.value.quarta_nota_quarto_bimestre,
            faltas: this.formQuartoBimestre.value.faltas_quarto_bimestre
          }
       ]
      };
      this.api.atualizaBimestre(id, obj).subscribe(dados =>{
          console.log(dados);
      });
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
