export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
  brand: string;
  specifications: ProductSpecifications;
  isFeatured: boolean;
  createdAt: Date;
}

export interface ProductSpecifications {
  processor?: string;
  graphicsCard?: string;
  memory?: string;
  storage?: string;
  powerSupply?: string;
  cooling?: string;
}

export enum ProductCategory {
  PROCESSOR = 'Processor',
  GRAPHICS_CARD = 'Graphics Card',
  MOTHERBOARD = 'Motherboard',
  RAM = 'RAM',
  STORAGE = 'Storage',
  POWER_SUPPLY = 'Power Supply',
  COOLING = 'Cooling',
  CASE = 'Case',
  MONITOR = 'Monitor',
  ACCESSORIES = 'Accessories'
}