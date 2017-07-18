import { Type } from './type.model';
export interface IHeader {
  title: string;
  number?: number;
  types?: Type[];
  navigation?: {
    previous: number;
    next: number;
  }
}
