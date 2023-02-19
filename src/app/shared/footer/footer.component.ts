import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-paginas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year : number = new Date().getFullYear();

  constructor( public _servicio: InfoPaginaService) { }

  ngOnInit() {
      
  }

}
