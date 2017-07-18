import { Type } from './type.model';

export interface IMove {
  title: string;
  type: Type;
  category: string;
  power: string;
  accuracy: string;
  pp: number;
  id: number;
  lv?: number;
  mid?: number;
  name?: string;
}
