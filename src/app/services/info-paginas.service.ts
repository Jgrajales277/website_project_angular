import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;

  constructor( private http: HttpClient  ) {

    //console.log(' Servicio de Info Página listo')
 
    //Leer el archivo de Json

    this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {

      this.loaded = true; 
      this.info = resp;
      console.log(resp);

    }); 
  }
}