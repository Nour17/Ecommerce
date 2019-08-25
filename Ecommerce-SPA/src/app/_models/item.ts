import { Photo } from './photo';

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  commodityLeft: number;
  rate?: number;
  numberOfRatings?: number;
  photoUrl: string;
  createdAt: Date;
  photos?: Photo[];
}
