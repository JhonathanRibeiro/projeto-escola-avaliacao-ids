import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiURL = environment.api;

  constructor(private http: HttpClient) { }

  public getBoletim(): Observable<any> {
    return this.http.get(`${this.apiURL}/boletim`)
  }
  
  public getAlunos(): Observable<any> {
    return this.http.get(`${this.apiURL}/alunos`)
  }

  public getAlunoById(id: any): Observable<any> {
    return this.http.get(`${this.apiURL}/alunos/${id}`);
  }
}