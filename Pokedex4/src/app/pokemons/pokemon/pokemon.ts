import { Type } from '../../shared/type.model';

export interface IPokemon {
  pid: number;
  number: number;
  name: string;
  image: string;
  cry: string;
  description: string;
  species: string;
  male: number;
  female: number;
  weight: string;
  height: string;
  types: Array<Type>;
  abilities: {hidden: Array<number>; normal: Array<number>};
}
