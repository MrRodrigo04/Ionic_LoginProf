import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DiagnosticoRequest } from '../interfaces/intDiagnostico/DiagnosticoRequest';
import { DiagnosticoResponse } from '../interfaces/intDiagnostico/DiagnosticoResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnoticoService {

  constructor(private http: HttpClient) { }

  getDiagnosticos(): Observable<DiagnosticoResponse[]>{
    return this.http.get<DiagnosticoResponse[]>
    ('http://localhost:3000/diagnostico');
  }

  postDiagnostico(diagnostico: DiagnosticoRequest): Observable<DiagnosticoRequest>{
    return this.http.post<DiagnosticoRequest>
    ('http://localhost:3000/diagnostico/nuevo_diagnostico',diagnostico);
  }
}
