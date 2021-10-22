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

  mediasporbimestre: Array<any>;

  mediafinal: any;
  totalfaltas: number = 0;
  presenca: number = 0;
  situacao: string = '';

  constructor(
    private api: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAlunoById();
  }

  getAlunoById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(alunos => {
      this.aluno = Array(alunos)

      alunos.bimestres.filter((res: any) => {
        this.totalfaltas = this.totalfaltas + parseInt(res.faltas)

        this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))
        const result = Array(res);

        const gradList = [
          res.n1,
          res.n2,
          res.n3,
          res.n4
        ]

        console.log(this.calculoNotaFinal(res));

        const media = parseFloat(this.getMediaBimestral(gradList).toFixed(2));
        this.mediaBimestral(media, result, res);

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

  public getMediaBimestral(gradeList: any) {
    let items = gradeList.length
    let mediaBimestral = 0
    for (let i = 0; i < items; i++) {
      mediaBimestral += gradeList[i]
    }
    return mediaBimestral
  }

  public calculoNotaFinal(gradeList: any) {
    let notas = gradeList;
    Array(notas).filter(res => {
      //multiplicando as notas pelo peso das disciplinas
      let notaPrimDisciplina = res.n1 * 1.5
      let notaSegDisciplina = res.n2 * 2.5
      let notaTerDisciplina = res.n3 * 3
      let notaQuaDisciplina = res.n4 * 3

      const gradeList = [
        notaPrimDisciplina,
        notaSegDisciplina,
        notaTerDisciplina,
        notaQuaDisciplina
      ];

      const total  = gradeList.reduce((total, currentElement) => total + currentElement)
      console.log(total)
    })
  }

  public calculoFrequencia(freq: any) {
    let faltas = freq;
    let dias = 160;

    let result = dias - faltas;
    let n = result / dias;
    let a = n * 100;
    return a;
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