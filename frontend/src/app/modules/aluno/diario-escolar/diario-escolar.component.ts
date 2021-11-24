import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { calculoMediaPonderada } from '../helpers/CalculoMediaPonderada';

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

  mediafinal: number;
  totalfaltas: number = 0;
  presenca: number = 0;
  situacao: string = '';

  somaPesos: number = 10;
  totalDiasLetivos: number = 160;
  totalBimestres: number = 4;

  pesoParticipacao: number = 1.5;
  pesoEntrega: number = 2.5;
  pesoTrabalho: number = 3;
  pesoProva: number = 3;
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
    this.api.getAlunoById(id).subscribe(dados => {
      this.aluno = Array(dados);
      this.faltasPorBimestre(dados);

      dados.bimestres.filter((res: any) => {
        this.calculoMediaPonderada(res);
        this.notasBimestre(Array(res), res);
        this.verificaSituacaoFinal(res);        
      });
    }, err => console.error(err));
  }
  //Retorna as faltas por bimestre
  public faltasPorBimestre(dados): void {
    this.faltasPrimeiroBimestre = dados.bimestres[0].faltas
    this.faltasSegundoBimestre  = dados.bimestres[1].faltas
    this.faltasTerceiroBimestre = dados.bimestres[2].faltas
    this.faltasQuartoBimestre   = dados.bimestres[3].faltas
  }

  public verificaSituacaoFinal(res): void {
    this.totalfaltas += parseInt(res.faltas)
      this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))

      if(this.presenca < this.minimoPresenca) {
        this.situacao = 'Reprovado por falta';
      } else if (this.mediafinal < this.mediaRecuperacao) {
        this.situacao = 'Reprovado';
      } else if (this.mediafinal >= this.mediaRecuperacao && this.mediafinal < this.mediaAprovado) {
        this.situacao = 'Recuperação';
      } else {
        this.situacao = 'Aprovado';
      }
  }
  //Retorna a media ponderada de cada bimestre e a media final
  public calculoMediaPonderada(nota: any): void {
    const bimestre = nota.id;
    const mediaPonderada = ((nota.n1 * this.pesoParticipacao) + (nota.n2 * this.pesoEntrega) + (nota.n3 * this.pesoTrabalho) + (nota.n4 * this.pesoProva)) /this.somaPesos;
    //Verifica o id do bimestre e em seguida atribui a media ponderada 
    bimestre == 1 ? this.mediaprimeirobimestre = mediaPonderada: '';
    bimestre == 2 ? this.mediasegundobimestre = mediaPonderada: '';
    bimestre == 3 ? this.mediaterceirobimestre = mediaPonderada: '';
    bimestre == 4 ? this.mediaquartobimestre = mediaPonderada: '';
    //soma todas as medias bimestrais e realiza o calculo da media simples, retornando a media final do aluno.
    const somaMediaBimestres = this.mediaprimeirobimestre + this.mediasegundobimestre + this.mediaterceirobimestre + this.mediaquartobimestre;
    this.mediafinal = somaMediaBimestres / this.totalBimestres
  }
  // Retorna a porcentagem de frequência do aluno
  public calculoFrequencia(freq: any): any {
    const faltas = freq;
    const dias_letivos = this.totalDiasLetivos;
    const diff = dias_letivos - faltas;
    const res = diff / dias_letivos;
    const frequencia = res * 100;
    return frequencia;
  }
  // Exibe as notas dos bimestres
  public notasBimestre(notas: any, bimestre: any): void {
    bimestre.id == 1 ? this.primeirobimestre = notas : '';
    bimestre.id == 2 ? this.segundobimestre = notas : '';
    bimestre.id == 3 ? this.terceirobimestre = notas : '';
    bimestre.id == 4 ? this.quartobimestre = notas : '';
  }
}