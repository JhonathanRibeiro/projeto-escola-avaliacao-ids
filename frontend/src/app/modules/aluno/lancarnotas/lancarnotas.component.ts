import { Component, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-lancarnotas',
  templateUrl: './lancarnotas.component.html',
  styleUrls: ['./lancarnotas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LancarnotasComponent {
  bimestres: SelectItem[];
  bimestreId: any = 1;

  constructor() {
    this.bimestres = [
      { label: 'Primeiro bimestre', value: { id: 1, name: 'Primeiro Bimestre' } },
      { label: 'Segundo bimestre', value: { id: 2, name: 'Segundo Bimestre' } },
      { label: 'Terceiro bimestre', value: { id: 3, name: 'Terceiro bimestre' } },
      { label: 'Quarto bimestre', value: { id: 4, name: 'Quarto bimestre' } },
    ];
  }

  getBimestre() {
    this.bimestreId = +this.bimestreId;
  }
}