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
    // const headers = new HttpHeaders({
    //   'Token-usuario': 'ASDASDAS45456456454SD'
    // });

    return this.http.get('https://reqres.in/api/user', {
      params
    }).pipe(
      map( resp => {
        return resp['data'];
      }),
      catchError( err => {
        console.log('sucedio un error');
        console.warn(err);
        return throwError('Error personalizado');
      } )
    ); // ponemos return porque se requiere suscribirse en ptro lugar
  }
}
