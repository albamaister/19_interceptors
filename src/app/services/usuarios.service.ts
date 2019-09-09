import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http: HttpClient) {
   }

   obtenerUsuarios() {

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Andres Alba');


    return this.http.get('https://reqresfsdfs.in/api/user', {
      params
    }).pipe(
      map( resp => {
        return resp['data'];
      }),
    ); // ponemos return porque se requiere suscribirse en ptro lugar
  }
}
