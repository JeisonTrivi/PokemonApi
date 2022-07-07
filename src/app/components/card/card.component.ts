import { Component, Input } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() personaje!: Personaje;

  constructor() {}

  nameUpper() {
    return (
      this.personaje.name.charAt(0).toUpperCase() + this.personaje.name.slice(1)
    );
  }

  imgFront() {
    return this.personaje.sprites.front_default ? true : false;
  }
  imgFrontFemale() {
    return this.personaje.sprites.front_female ? true : false;
  }
  imgFrontShiny() {
    return this.personaje.sprites.front_shiny ? true : false;
  }
  imgFrontShinyFemale() {
    return this.personaje.sprites.front_shiny_female ? true : false;
  }
  imgBackShinyFemale() {
    return this.personaje.sprites.back_shiny_female ? true : false;
  }
  imgBackShiny() {
    return this.personaje.sprites.back_shiny ? true : false;
  }
  imgBack() {
    return this.personaje.sprites.back_default ? true : false;
  }
  imgBackFemale() {
    return this.personaje.sprites.back_female ? true : false;
  }
}
