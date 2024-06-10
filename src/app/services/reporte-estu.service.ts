import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReporEstuRequest } from '../interfaces/intReportEstu/ReporEstuRequest';
import { ReporEstuResponse } from '../interfaces/intReportEstu/ReporEstuResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteEstuService {

  constructor(private http: HttpClient) { }

  getReporEstu(): Observable<ReporEstuResponse[]>{
    return this.http.get<ReporEstuResponse[]>
    ('http://localhost:3000/repor-estudiante');
  }

  postReporEstu(reporte: ReporEstuRequest): Observable<ReporEstuRequest>{
    return this.http.post<ReporEstuRequest>
    ('http://localhost:3000/repor-estudiante/nuevo_reporte',reporte);
  }
  
}
