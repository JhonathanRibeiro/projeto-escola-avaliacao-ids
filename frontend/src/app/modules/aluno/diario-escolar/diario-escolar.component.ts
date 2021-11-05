import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { DecimalPipe } from '@angular/common';

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

  _primeirobimestre: number;
  _segundobimestre: number;
  _terceirobimestre: number;
  _quartobimestre: number;

  mediasporbimestre: Array<any>;

  mediafinal: any;
  totalfaltas: number = 0;
  presenca: number = 0;
  situacao: string = '';

  totalNotas: number = 0;

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
        this.totalfaltas = this.totalfaltas + parseInt(res.faltas)

        this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))
        const result = Array(res);

        const gradList = [res.n1,res.n2,res.n3,res.n4];

        const media = parseFloat(this.calculoMediaBimestral(gradList).toFixed(2));
        const mediaFinal = this.calculoMediaFinal(gradList, res);

        this.mediaBimestral(media, result, res);
        this.mediaFinal(mediaFinal, res);

        if (this.presenca < 75 && this.mediafinal < 5) {
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

  public calculoMediaBimestral(gradeList: any) {
    let notas = gradeList.length
    let mediaBimestral = 0
    for (let i = 0; i < notas; i++) {
      mediaBimestral += gradeList[i]
    }
    return mediaBimestral
  }

  public calculoMediaFinal(data: any, res: any) {
    let total = (data[0] * 1.5) + (data[1] * 2.5) + (data[2] * 3) + (data[3] * 3);
    this.totalNotas = this.totalNotas + total;  
    console.log(data);
    console.log(total);
    console.log(this.totalNotas);
    this.mediafinal = total
  }

  public calculoFrequencia(freq: any) {
    let faltas = freq;
    let dias = 160;

    let diff = dias - faltas;
    let res = diff / dias;
    let frequencia = res * 100;
    return frequencia;
  }

  public mediaFinal(media: any, res: any) {
    switch (res.id) {
      case 1:
        this._primeirobimestre = res ;
        break;
      case 2:
        this._segundobimestre = media ;
        break;
      case 3:
        this._terceirobimestre = media ;
        break;
      case 4:
        this._quartobimestre = media ;
        break;
      default:
        break;
    }
    
    // console.log(this._primeirobimestre, this._segundobimestre, this._terceirobimestre, this._quartobimestre)

  }

  public mediaBimestral(media: number, result: any, res: any): void {
    switch (res.id) {
      case 1:
        this.primeirobimestre = result;
        this.mediaprimeirobimestre = media / 4;
        break;
      case 2:
        this.segundobimestre = result;
        this.mediasegundobimestre = media / 4;
        break;
      case 3:
        this.terceirobimestre = result;
        this.mediaterceirobimestre = media / 4;
        break;
      case 4:
        this.quartobimestre = result;
        this.mediaquartobimestre = media / 4;
        break;
      default:
        break;
    }
  }
}