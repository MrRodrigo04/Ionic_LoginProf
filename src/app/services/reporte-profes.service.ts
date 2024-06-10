import { Injectable } from '@angular/core';
import { ReporProRequest } from '../interfaces/intReportPro/ReporProRequest';
import { ReporProResponse } from '../interfaces/intReportPro/ReporProResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteProfesService {

  constructor(private http: HttpClient) { }

  getReporPro(): Observable<ReporProResponse[]>{
    return this.http.get<ReporProResponse[]>
    ('http://localhost:3000/repor-profe');
  }

  postReporPro(reporte: ReporProRequest): Observable<ReporProRequest>{
    return this.http.post<ReporProRequest>
    ('http://localhost:3000/repor-profe/nuevo_reporte',reporte);
  }
}
