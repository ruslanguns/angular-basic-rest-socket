import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from './rick-morty.interface';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private http: HttpClient) {}

  obtenerPersonajes() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    return this.http.get<Personajes>(apiUrl).pipe(pluck('results'));
  }
}
