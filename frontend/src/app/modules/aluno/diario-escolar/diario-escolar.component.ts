import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';

@Component({
  selector: 'app-diario-escolar',
  templateUrl: './diario-escolar.component.html',
  styleUrls: ['./diario-escolar.component.css']
})
export class DiarioEscolarComponent implements OnInit {
  aluno: Aluno;
  primeirobimestre: Aluno[];
  segundobimestre: Aluno[];
  terceirobimestre: Aluno[];
  quartobimestre: Aluno[];

  mediaprimeirobimestre: number;
  mediasegundobimestre: number;
  mediaterceirobimestre: number;
  mediaquartobimestre: number;

  mediafinal: any;
  totalfaltas: number = 0;
  presenca: number = 0;
  situacao: string = '';

  constructor(
    private api: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.situacaoFinalAluno();
  }

  public situacaoFinalAluno(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(alunos => {
      this.aluno = Array(alunos)

      alunos.bimestres.filter((res: any) => {
        const result = Array(res);
        this.calculoMediaPonderada(res)
        this.notasBimestre(result, res);
        
        this.totalfaltas = this.totalfaltas + parseInt(res.faltas)
        this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))

        if(this.presenca < 75) {
          this.situacao = 'Reprovado por falta'
        }else if (this.mediafinal < 5) {
          this.situacao = 'Reprovado';
        } else if (this.mediafinal >= 5 && this.mediafinal < 6) {
          this.situacao = 'Recuperação';
        } else {
          this.situacao = 'Aprovado';
        }
      });
    }, err => {
      console.error(err)
    });
  }

  public calculoMediaPonderada(nota: any) {
    if(nota.id == 1){
      let total = (nota.n1 * 1.5) + (nota.n2 * 2.5) + (nota.n3 * 3) + (nota.n4 * 3);
      this.mediaprimeirobimestre = total / 10
    }
    if(nota.id == 2) {
      let total = (nota.n1 * 1.5) + (nota.n2 * 2.5) + (nota.n3 * 3) + (nota.n4 * 3);
      this.mediasegundobimestre = total / 10
    }
    if(nota.id == 3) {
      let total = (nota.n1 * 1.5) + (nota.n2 * 2.5) + (nota.n3 * 3) + (nota.n4 * 3);
      this.mediaterceirobimestre = total / 10
    }
    if(nota.id == 4) {
      let total = (nota.n1 * 1.5) + (nota.n2 * 2.5) + (nota.n3 * 3) + (nota.n4 * 3);
      this.mediaquartobimestre = total / 10
    }

    let somaMediaBimestres = this.mediaprimeirobimestre + this.mediasegundobimestre + this.mediaterceirobimestre + this.mediaquartobimestre;
    this.mediafinal = somaMediaBimestres / 4
  }

  public calculoFrequencia(freq: any) {
    let faltas = freq;
    let dias = 160;

    let diff = dias - faltas;
    let res = diff / dias;
    let frequencia = res * 100;
    return frequencia;
  }

  public notasBimestre(result: any, res: any): void {
    switch (res.id) {
      case 1:
        this.primeirobimestre = result;
        break;
      case 2:
        this.segundobimestre = result;
        break;
      case 3:
        this.terceirobimestre = result;
        break;
      case 4:
        this.quartobimestre = result;
        break;
      default:
        break;
    }
  }
}