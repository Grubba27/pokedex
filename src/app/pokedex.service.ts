import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokedex(){
    return   this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
  getPokemonInfo(pokeUrl:  string){
    return  this.http.get(pokeUrl);
  }
}
