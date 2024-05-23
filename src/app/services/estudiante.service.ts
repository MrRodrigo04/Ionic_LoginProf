import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudianteResponse } from '../interfaces/EstudianteResponse';
import { EstudianteRequest } from '../interfaces/EstudianteRequest';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor( private http: HttpClient) { }

  getEstudiantes(): Observable<EstudianteResponse[]>{
    return this.http.get<EstudianteResponse[]>
    ('http://localhost:3000/estudiante');
  }

  postEstudiante(estudiante: EstudianteRequest): Observable<EstudianteRequest>{
    return this.http.post<EstudianteRequest>
    ('http://localhost:3000/estudiante/register',estudiante);
  }

}
