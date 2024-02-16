import {Provider} from "./provider";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  provider: {
    id: number;
    name: string;
  };
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    provider: {
      id: 1,
      name: 'Vodafone'
    }
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    provider: {
      id: 2,
      name: 'Movistar'
    }
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    provider: {
      id: 3,
      name: 'Yoigo'
    }
  },
  {
    id: 4,
    name: "Joseca's phone",
    price: 9999,
    description: 'What is this doing here...?',
    provider: {
      id: 1,
      name: 'Joseca'
    }
  },
  {
    id: 5,
    name: 'Banana',
    price: 1,
    description: 'If you close your eyes, it is like a real phone!',
    provider: {
      id: 5,
      name: 'Fruterias Pepe'
    }
  }
];