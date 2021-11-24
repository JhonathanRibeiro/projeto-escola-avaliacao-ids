// Retorna a porcentagem de frequência do aluno
export function calculoFrequencia(freq: any, diasLetivos): any {
    const faltas = freq;
    const dias_letivos = diasLetivos;

    const diff = dias_letivos - faltas;
    const res = diff / dias_letivos;
    const frequencia = res * 100;
    return frequencia;
  }