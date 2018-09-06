import {Producer} from "./producer";
import {Category} from "./category";

export class Product {
  id: number;
  description: string;
  customDescription: string;
  name: string;
  producer: Producer;
  category: Category;
}
