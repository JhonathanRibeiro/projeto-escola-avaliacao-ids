import { AlunoService } from './../aluno.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Aluno } from 'src/app/models/aluno.model';

@Component({
  selector: 'app-lancarnotas',
  templateUrl: './lancarnotas.component.html',
  styleUrls: ['./lancarnotas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LancarnotasComponent implements OnInit {
  bimestres: SelectItem[];
  bimestre: any;
  bimestreId: any = 1;
  aluno: Aluno;
  
  constructor(
    private route: ActivatedRoute,
    private api: AlunoService
  ) {
    this.bimestres = [
      { label: 'Primeiro bimestre', value: { id: 1, name: 'Primeiro Bimestre' } },
      { label: 'Segundo bimestre', value: { id: 2, name: 'Segundo Bimestre' } },
      { label: 'Terceiro bimestre', value: { id: 3, name: 'Terceiro bimestre' } },
      { label: 'Quarto bimestre', value: { id: 4, name: 'Quarto bimestre' } },
    ];
  }

  ngOnInit() {
    this.getAlunoById();
  }

  getBimestre() { // Função que foi chamada
    this.bimestreId = +this.bimestreId;
  }

  getAlunoById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(aluno => {
      this.aluno = aluno;
    });
  }
}