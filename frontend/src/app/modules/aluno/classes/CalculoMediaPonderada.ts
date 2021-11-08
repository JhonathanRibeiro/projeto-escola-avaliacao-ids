export class calculoMediaPonderada {
//   let total = (nota[0] * 1.5) + (nota[1] * 2.5) + (nota[2] * 3) + (nota[3] * 3);
//   this.totalNotas = this.totalNotas + total;  
  public calculoMedia(nota: any) {
    if(nota.id == 1){
        let total = (nota.n1 * 1.5) + (nota.n2 * 2.5) + (nota.n3 * 3) + (nota.n4 * 3);
        console.log((total / 10).toFixed(2))
      }
  }
}