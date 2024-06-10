import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResporEstuRequest } from '../interfaces/intReportEstu/ReporEstuRequest';
import { ResporEstuResponse } from '../interfaces/intReportEstu/ReporEstuResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteEstuService {

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<ResporEstuResponse[]>{
    return this.http.get<ResporEstuResponse[]>
    ('http://localhost:3000/repor-estudiante');
  }

  postCalificar(reporte: ResporEstuRequest): Observable<ResporEstuRequest>{
    return this.http.post<ResporEstuRequest>
    ('http://localhost:3000/repor-estudiante/nuevo_reporte',reporte);
  }
  
}
