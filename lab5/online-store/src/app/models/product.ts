export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  storeLink: string;
  category: string;
  likes: number;
  imageGallery?: string[];
}