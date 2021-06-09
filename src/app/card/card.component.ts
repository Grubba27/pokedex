import {Component, Input, OnInit} from '@angular/core';
import {PokedexService} from "../pokedex.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;

  pokeData = {
    number: '',
    name: '',
    backSprite: '',
    frontSprite: '',
    firstType: '',
    abilities: [{ ability: {name: ''}}]
  }

  spriteToggle: boolean = false;

  constructor(private pokedex: PokedexService) {
  }

  ngOnInit(): void {
    this.pokedex.getPokemonInfo(this.pokemon.url).subscribe((res: any) => {

      this.pokeData = {
        number: res.id,
        name: res.name,
        backSprite: res.sprites.back_default,
        frontSprite: res.sprites.front_default,
        firstType: res.types[0].type.name,
        abilities: res.abilities

      };
    });

  }

  changeToggle(){
    this.spriteToggle = !this.spriteToggle;
  }
}
