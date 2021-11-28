import { Aluno } from "src/app/models/aluno.model";

export class DadosBimestre {
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

    constructor() {
        this.aluno
        this.primeirobimestre
        this.segundobimestre
        this.terceirobimestre
        this.quartobimestre
      
        this.faltasPrimeiroBimestre
        this.faltasSegundoBimestre
        this.faltasTerceiroBimestre
        this.faltasQuartoBimestre
      
        this.mediaprimeirobimestre
        this.mediasegundobimestre
        this.mediaterceirobimestre
        this.mediaquartobimestre
      
        this.mediafinal
        this.totalfaltas
        this.presenca
        this.situacao
      
        this.somaPesos
        this.totalDiasLetivos
        this.totalBimestres
      
        this.pesoParticipacao
        this.pesoEntrega
        this.pesoTrabalho
        this.pesoProva
        this.minimoPresenca
        this.mediaRecuperacao
        this.mediaAprovado
    }
}