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

  faltasPrimeiroBimestre: number;
  faltasSegundoBimestre: number;
  faltasTerceiroBimestre: number;
  faltasQuartoBimestre: number;

  mediaprimeirobimestre: number;
  mediasegundobimestre: number;
  mediaterceirobimestre: number;
  mediaquartobimestre: number;

  mediafinal: any;
  totalfaltas: number = 0;
  presenca: number = 0;
  situacao: string = '';

  somaPesos: number = 10;
  somaBimestres: number = 4;

  pesoParticipacao: number = 1.5;
  pesoEntrega: number = 2.5;
  pesoTrabalho: number = 3;
  pesoProva: number = 3;
  totalDiasLetivos: number = 160;
  minimoPresenca: number = 75;
  mediaRecuperacao: number = 5;
  mediaAprovado: number = 6;

  constructor(
    private api: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.situacaoFinalAluno();
  }

  //Irá cruzar as informações obtidas para retornar a situação final do aluno
  public situacaoFinalAluno(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(alunos => {
      this.aluno = Array(alunos)

      this.faltasPrimeiroBimestre = alunos.bimestres[0].faltas
      this.faltasSegundoBimestre = alunos.bimestres[1].faltas
      this.faltasTerceiroBimestre = alunos.bimestres[2].faltas
      this.faltasQuartoBimestre = alunos.bimestres[3].faltas

      alunos.bimestres.filter((res: any) => {
        const result = Array(res);
        this.calculoMediaPonderada(res)
        this.notasBimestre(result, res);
        
        this.totalfaltas = this.totalfaltas + parseInt(res.faltas)
        this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))

        if(this.presenca < this.minimoPresenca) {
          this.situacao = 'Reprovado por falta'
        }else if (this.mediafinal < this.mediaRecuperacao) {
          this.situacao = 'Reprovado';
        } else if (this.mediafinal >= this.mediaRecuperacao && this.mediafinal < this.mediaAprovado) {
          this.situacao = 'Recuperação';
        } else {
          this.situacao = 'Aprovado';
        }
      });
    }, err => {
      console.error(err)
    });
  }

  //Retorna a media ponderada de cada bimestre e a media final
  public calculoMediaPonderada(nota: any) {
    switch (nota.id) {
      case 1:
        const mediaPrimeiroBimestre = (nota.n1 * this.pesoParticipacao) + (nota.n2 * this.pesoEntrega) + (nota.n3 * this.pesoTrabalho) + (nota.n4 * this.pesoProva);
        this.mediaprimeirobimestre = mediaPrimeiroBimestre / this.somaPesos
        break;
      case 2:
        const mediaSegundoBimestre = (nota.n1 * this.pesoParticipacao) + (nota.n2 * this.pesoEntrega) + (nota.n3 * this.pesoTrabalho) + (nota.n4 * this.pesoProva);
        this.mediasegundobimestre = mediaSegundoBimestre / this.somaPesos
        break;
      case 3:
        const mediaTerceiroBimestre = (nota.n1 * this.pesoParticipacao) + (nota.n2 * this.pesoEntrega) + (nota.n3 * this.pesoTrabalho) + (nota.n4 * this.pesoProva);
      this.mediaterceirobimestre = mediaTerceiroBimestre / this.somaPesos
        break;
      case 4:
        const mediaQuartoBimestre = (nota.n1 * this.pesoParticipacao) + (nota.n2 * this.pesoEntrega) + (nota.n3 * this.pesoTrabalho) + (nota.n4 * this.pesoProva);
        this.mediaquartobimestre = mediaQuartoBimestre / this.somaPesos
        break;
      default:
        break;
    }
    //soma todas as medias bimestrais e realiza o calculo da media simples, retornando a media final do aluno.
    const somaMediaBimestres = this.mediaprimeirobimestre + this.mediasegundobimestre + this.mediaterceirobimestre + this.mediaquartobimestre;
    this.mediafinal = somaMediaBimestres / this.somaBimestres
  }
  
  // Retorna a porcentagem de frequência do aluno
  public calculoFrequencia(freq: any) {
    const faltas = freq;
    const dias = this.totalDiasLetivos;

    const diff = dias - faltas;
    const res = diff / dias;
    const frequencia = res * 100;
    return frequencia;
  }

  // Exibe as notas dos bimestres
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