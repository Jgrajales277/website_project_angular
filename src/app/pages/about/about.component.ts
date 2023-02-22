import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-paginas.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public infoService: InfoPaginaService) {}

  ngOnInit() {
      
  }

}


