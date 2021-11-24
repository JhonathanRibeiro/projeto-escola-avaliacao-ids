export function calculoMediaPonderada(nota: any, pesoParticipacao, pesoEntrega, pesoTrabalho, pesoProva, somaPesos,mediaprimeirobimestre,mediasegundobimestre,mediaterceirobimestre,mediaquartobimestre, mediafinal,totalBimestres) {
  const mediaPonderada = ((nota.n1 * pesoParticipacao) + (nota.n2 * pesoEntrega) + (nota.n3 * pesoTrabalho) + (nota.n4 * pesoProva)) / somaPesos;

    switch (nota.id) {
      case 1:
        mediaprimeirobimestre = mediaPonderada
        break;
      case 2:
        mediasegundobimestre = mediaPonderada
        break;
      case 3:
      mediaterceirobimestre = mediaPonderada
        break;
      case 4:
        mediaquartobimestre = mediaPonderada
        break;
      default:
        break;
    }
    //soma todas as medias bimestrais e realiza o calculo da media simples, retornando a media final do aluno.
    const somaMediaBimestres = mediaprimeirobimestre + mediasegundobimestre + mediaterceirobimestre + mediaquartobimestre;
    mediafinal = somaMediaBimestres / totalBimestres
}