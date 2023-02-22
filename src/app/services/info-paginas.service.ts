import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;

  equipo: any[] = [];

  constructor( private http: HttpClient  ) {

    //console.log(' Servicio de Info Página listo')
 
    this.cargarInfo();
    this.cargarEquipo();

}

private cargarInfo() {
    //Leer el archivo de Json

    this.http.get('assets/data/data-pagina.json')
     .subscribe((resp: InfoPagina) => {

      this.loaded = true; 
      this.info = resp;

    }); 
  }

private cargarEquipo() {

  this.http.get('https://angular-websiteproject-a8eb8-default-rtdb.firebaseio.com/equipo.json')
  .subscribe( (resp: any) => {

    this.equipo = resp; 

  }); 
}

}