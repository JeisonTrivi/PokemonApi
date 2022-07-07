import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personaje';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personaje!: Personaje;
  personajes: Personaje[] = [];
  personajesCopy!: Personaje[];
  name: string = '';
  nameLowerCase: string = '';
  nameCharacter: string = '';
  urlImage: string = '';

  constructor(public httpClient: HttpClient) {
    this.getData();
  }

  ngOnInit() {
    this.getAllPokemons();
  }

  async getData() {
    this.nameLowerCase = this.name.toLowerCase();
    await this.httpClient
      .get(`${environment.apiUrl}/${this.nameLowerCase}`)
      .subscribe((pokemon: any) => {
        this.personaje = pokemon;
      });
    this.personajesCopy = this.personajes;
  }

  filter(e: any) {
    const search = e.target.value;
    this.personajes = this.personajesCopy.filter((personaje: Personaje) => {
      return personaje.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  async getAllPokemons() {
    for (let i = 1; i <= 151; i++) {
      await this.httpClient
        .get(`${environment.apiUrl}/${i}`)
        .subscribe((data: any) => {
          this.personajes.push(data);
          this.personajesCopy = this.personajes;
        });
    }
    console.log(this.personajes);
  }

  imgHere() {
    return this.urlImage ? true : false;
  }
}
