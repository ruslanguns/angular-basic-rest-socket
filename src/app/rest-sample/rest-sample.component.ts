import { Component } from '@angular/core';
import { Result } from '../rick-morty.interface';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-rest-sample',
  templateUrl: './rest-sample.component.html',
  styleUrls: ['./rest-sample.component.css'],
})
export class RestSampleComponent {
  personajes: Result[] = [];

  constructor(private rickMortyService: RickMortyService) {
    this.rickMortyService
      .obtenerPersonajes()
      .subscribe((result) => (this.personajes = result));
  }
}
