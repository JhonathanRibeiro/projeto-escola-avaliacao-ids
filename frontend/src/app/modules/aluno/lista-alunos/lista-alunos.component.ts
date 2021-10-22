import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  alunos: any[];

  constructor(private api: AlunoService) { }

  ngOnInit() {
    this.listaAlunos();
  }
  public listaAlunos() {
    this.api.getAlunos().subscribe((aluno) => {
      this.alunos = aluno;
    });
  }

  private fieldArray: Array<any> = [{ evaluationRuleField: "", condition: "condition", value: "value" }];

  evaluationRuleFields = [
    { value: "field_1", valueFieldType: 'text', viewValue: "Field 1" },
    { value: "field_2", valueFieldType: 'dropdown', viewValue: "Field 2" },
    { value: "field_3", valueFieldType: 'text', viewValue: "Field 3" },
    { value: "field_4", valueFieldType: 'multiselect', viewValue: "Field 4" },
    { value: "field_5", valueFieldType: 'dropdown', viewValue: "Field 5" }
  ]
}
