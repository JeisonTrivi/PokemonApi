import { Abilities } from './Abilities';
import { Forms } from './Forms';
import { Sprites } from './Sprites';

export interface Personaje {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: Sprites;
  forms: Forms[];
  abilities: Abilities[];
}
