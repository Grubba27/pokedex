import {Component, OnInit} from '@angular/core';
import {PokedexService} from "./pokedex.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApi';
  pokemonNameFilter = '';
  pokemonArray = [];
  filteredPokemonArray = [];

  constructor(private pokedex: PokedexService) {
  }

  ngOnInit(): void {
    this.pokedex.getPokedex().subscribe((res: any) => {
      this.pokemonArray = res.results;
      this.filteredPokemonArray = this.filterPokemons(this.pokemonNameFilter);
    });

  }

  filter(text: string) {
    this.pokemonNameFilter = text;
    this.filteredPokemonArray = this.filterPokemons(this.pokemonNameFilter);
  }

  filterPokemons(pokemonNameFilter: any) {
    // @ts-ignore
    return this.pokemonArray.filter(i => i.name.toLowerCase().indexOf(pokemonNameFilter.toLowerCase()) > -1);
  }
}
