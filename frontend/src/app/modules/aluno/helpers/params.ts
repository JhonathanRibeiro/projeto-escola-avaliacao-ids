export function paramsPrimeiroBimestre(dados, formPrimeiroBimestre) {
  return {
        id: dados.id,
        nome: dados.nome,
        matricula: dados.matricula,
        status: dados.status,
        situacao: dados.situacao,
        bimestres: [
          {
            id: dados.bimestres[0].id,
            n1: formPrimeiroBimestre.value.primeira_nota_primeiro_bimestre,
            n2: formPrimeiroBimestre.value.segunda_nota_primeiro_bimestre,
            n3: formPrimeiroBimestre.value.terceira_nota_primeiro_bimestre,
            n4: formPrimeiroBimestre.value.quarta_nota_primeiro_bimestre,
            faltas: formPrimeiroBimestre.value.faltas_primeiro_bimestre
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
            n1: dados.bimestres[3].n1,
            n2: dados.bimestres[3].n2,
            n3: dados.bimestres[3].n3,
            n4: dados.bimestres[3].n4,
            faltas: dados.bimestres[3].faltas
        }]
   }
}

export function paramsSegundoBimestre(dados, formSegundoBimestre) {
  return {
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
        n1: formSegundoBimestre.value.primeira_nota_segundo_bimestre,
        n2: formSegundoBimestre.value.segunda_nota_segundo_bimestre,
        n3: formSegundoBimestre.value.terceira_nota_segundo_bimestre,
        n4: formSegundoBimestre.value.quarta_nota_segundo_bimestre,
        faltas: formSegundoBimestre.value.faltas_segundo_bimestre
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
  }
}

export function paramsTerceiroBimestre(dados, formTerceiroBimestre) {
  return {
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
        n1: formTerceiroBimestre.value.primeira_nota_terceiro_bimestre,
        n2: formTerceiroBimestre.value.segunda_nota_terceiro_bimestre,
        n3: formTerceiroBimestre.value.terceira_nota_terceiro_bimestre,
        n4: formTerceiroBimestre.value.quarta_nota_terceiro_bimestre,
        faltas: formTerceiroBimestre.value.faltas_terceiro_bimestre
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
  }
}

export function paramsQuartoBimestre(dados, formQuartoBimestre) {
  return {
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
        n1: formQuartoBimestre.value.primeira_nota_quarto_bimestre,
        n2: formQuartoBimestre.value.segunda_nota_quarto_bimestre,
        n3: formQuartoBimestre.value.terceira_nota_quarto_bimestre,
        n4: formQuartoBimestre.value.quarta_nota_quarto_bimestre,
        faltas: formQuartoBimestre.value.faltas_quarto_bimestre
      }
   ]
  }
}