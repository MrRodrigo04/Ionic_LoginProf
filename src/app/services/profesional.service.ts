import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfesionalResponse } from '../interfaces/intProfesional/ProfesionalResponse';
import { Observable } from 'rxjs';
import { ProfesionalRequest } from '../interfaces/intProfesional/ProfesionalRequest';
import { ProfesionalLogin } from '../interfaces/intProfesional/ProfesionalLogin';

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

  loginProfesional(profLogin: ProfesionalLogin):Observable<ProfesionalResponse>{
    return this.http.post<ProfesionalResponse>('http://localhost:3000/profesional/login',profLogin);
  }



}

