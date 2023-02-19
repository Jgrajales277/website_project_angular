import { Component, OnInit } from '@angular/core';
import { InfoPagina } from '../../interfaces/info-pagina-interface';
import { InfoPaginaService } from '../../services/info-paginas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService ) {}

  ngOnInit() {
  
  }

}

  