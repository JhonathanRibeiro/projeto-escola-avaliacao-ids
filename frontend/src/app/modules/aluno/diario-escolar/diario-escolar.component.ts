import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { calculoFrequencia } from '../helpers/CalculoFrequenciaEscolar';
import { DadosBimestre } from '../helpers/DadosBimestre';

@Component({
  selector: 'app-diario-escolar',
  templateUrl: './diario-escolar.component.html',
  styleUrls: ['./diario-escolar.component.css']
})
export class DiarioEscolarComponent extends DadosBimestre implements OnInit {
  constructor(private api: AlunoService, private route: ActivatedRoute) { super(); }

  ngOnInit() { this.situacaoFinalAluno() }
  //Irá cruzar as informações obtidas para retornar a situação final do aluno
  public situacaoFinalAluno(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(dados => {
      this.aluno = Array(dados);
      this.faltasPorBimestre(dados);

      dados.bimestres.filter((res: any) => {
        this.calculoMediaPonderada(res);
        this.notasBimestre(res);
        this.verificaSituacaoFinal(res);
      });
    }, err => console.error(err));
  }
  //Retorna as faltas por bimestre
  public faltasPorBimestre(dados): void {
    this.faltasPrimeiroBimestre = dados.bimestres[0].faltas
    this.faltasSegundoBimestre = dados.bimestres[1].faltas
    this.faltasTerceiroBimestre = dados.bimestres[2].faltas
    this.faltasQuartoBimestre = dados.bimestres[3].faltas
  }
  //Retorna a situação final do aluno
  public verificaSituacaoFinal(res): void {
    this.totalfaltas += parseInt(res.faltas)
    this.presenca = calculoFrequencia(this.totalfaltas, this.totalDiasLetivos)

    if (this.presenca < this.minimoPresenca) {
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
    const mediaPonderada = ((nota.n1 * this.pesoParticipacao) + (nota.n2 * this.pesoEntrega) + (nota.n3 * this.pesoTrabalho) + (nota.n4 * this.pesoProva)) / this.somaPesos;
    //Verifica o id do bimestre e em seguida atribui a media ponderada 
    bimestre == 1 ? this.mediaprimeirobimestre = mediaPonderada : '';
    bimestre == 2 ? this.mediasegundobimestre = mediaPonderada : '';
    bimestre == 3 ? this.mediaterceirobimestre = mediaPonderada : '';
    bimestre == 4 ? this.mediaquartobimestre = mediaPonderada : '';
    //soma todas as medias bimestrais e realiza o calculo da media simples, retornando a media final do aluno.
    const somaMediaBimestres = this.mediaprimeirobimestre + this.mediasegundobimestre + this.mediaterceirobimestre + this.mediaquartobimestre;
    this.mediafinal = somaMediaBimestres / this.totalBimestres
  }
  // Exibe as notas dos bimestres
  public notasBimestre(param: any): void {
    try {
      const notas = Array(param);
      if (notas && notas.length !== 0) {
        param.id == 1 ? this.primeirobimestre = notas : '';
        param.id == 2 ? this.segundobimestre = notas : '';
        param.id == 3 ? this.terceirobimestre = notas : '';
        param.id == 4 ? this.quartobimestre = notas : '';
      } else {
        throw new Error(`Não foi possível recuperar as notas do ${param.id} bimestre.`);
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}