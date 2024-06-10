import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {CategoriaRequest} from '../interfaces/intCategoria/CategoriaRequest';
import {CategoriaResponse} from '../interfaces/intCategoria/CategoriaResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<CategoriaResponse[]>{
    return this.http.get<CategoriaResponse[]>
    ('http://localhost:3000/categoria');
  }
}
