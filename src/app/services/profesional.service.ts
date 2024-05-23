import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfesionalResponse } from '../interfaces/ProfesionalResponse';
import { Observable } from 'rxjs';
import { ProfesionalRequest } from '../interfaces/ProfesionalRequest';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  constructor(private http: HttpClient) {}

  getProfesional():Observable<ProfesionalResponse[]>{
    return this.http.get<ProfesionalResponse[]>
    ('http://localhost:3000/profesional');
  }
  
  postEstudiante(profesional: ProfesionalRequest): Observable<ProfesionalRequest>{
    return this.http.post<ProfesionalRequest>
    ('http://localhost:3000/profesional/register',profesional);
  }



}

