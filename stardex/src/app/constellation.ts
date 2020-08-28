import { Star } from './star';

export class Constellation {
  constructor(

    public id: number,
    public name: string,
    public stars: Star[],
    public description: string,
    public top: number,
    public left: number,
    public imageURL: string

  ) {}
}
