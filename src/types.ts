export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

export interface Facility {
  id: string;
  name: string;
  icon: string;
}
