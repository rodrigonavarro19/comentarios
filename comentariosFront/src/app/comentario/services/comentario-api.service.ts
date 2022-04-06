import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Comentario } from '../interfaces/comentario.interface';
import { Region } from '../interfaces/region.interface';
import { ResponseDeleteComentario } from '../interfaces/response-delete-comentario.interface';
import { ResponsePostComentario } from '../interfaces/response-post-comentario.interface';
import { ResponsePutComentario } from '../interfaces/response-put-comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentarioApiService {

  private baseUrl: string = environment.baseUrl+"comentarios/";
  
  constructor(private http: HttpClient) { }

  public getRegiones():Observable<Region[]>{
    return this.http.get<Region[]>(`${this.baseUrl}regiones`);
  }

  public getComentarios():Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.baseUrl}listar`);
  }

  public postComentario(comentario: Comentario):Observable<ResponsePostComentario>{
    return this.http.post<ResponsePostComentario>(`${this.baseUrl}add`,comentario)
  }

  public putComentario(id: number, comentario: Comentario):Observable<ResponsePutComentario>{
    return this.http.put<ResponsePutComentario>(`${this.baseUrl}update/${id}`,comentario);
  }

  public deleteComentario(id: number):Observable<ResponseDeleteComentario>{
    return this.http.delete<ResponseDeleteComentario>(`${this.baseUrl}delete/${id}`);
  }

}
