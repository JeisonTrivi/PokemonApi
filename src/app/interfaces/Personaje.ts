import { Forms } from './Forms';
import { Sprites } from './Sprites';

export interface Personaje {
  id: number;
  name: string;
  sprites: Sprites;
  forms: Forms[];
}
