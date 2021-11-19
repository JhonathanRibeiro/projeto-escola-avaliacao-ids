export class calculoMediaPonderada {
  public calculoMedia(nota: any) {
    if(nota.id == 1){
        let total = (nota.n1 * 1.5) + (nota.n2 * 2.5) + (nota.n3 * 3) + (nota.n4 * 3);
        console.log((total / 10).toFixed(2))
      }
  }
}