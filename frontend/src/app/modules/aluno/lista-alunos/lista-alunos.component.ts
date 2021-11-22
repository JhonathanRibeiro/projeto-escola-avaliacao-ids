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

  ngOnInit(): void {
    this.listaAlunos();
  }
  
  public listaAlunos(): void {
    this.api.getAlunos().subscribe((aluno) => this.alunos = aluno);
  }
}
