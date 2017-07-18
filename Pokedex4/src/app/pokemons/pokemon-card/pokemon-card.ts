import { Type } from '../../shared/type.model';

export interface IPokemonCard {
  pid: number;
  number: number;
  name: string;
  icon: string;
  types: Type[];
}
