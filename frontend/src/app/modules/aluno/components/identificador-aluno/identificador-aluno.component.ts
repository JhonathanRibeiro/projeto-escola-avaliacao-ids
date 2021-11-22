import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-identificador-aluno',
  templateUrl: './identificador-aluno.component.html',
  styleUrls: ['./identificador-aluno.component.css']
})
export class IdentificadorAlunoComponent implements OnInit {
  aluno: Aluno[];

  constructor(  
    private route: ActivatedRoute,
    private api: AlunoService) { }

  ngOnInit(): void {
    this.getAlunoById();
  }

  public getAlunoById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getAlunoById(id).subscribe(aluno => this.aluno = aluno);
  }
}
