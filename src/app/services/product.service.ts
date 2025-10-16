import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Processors
    {
      id: '1',
      name: 'NVIDIA GeForce RTX 4090',
      category: ProductCategory.GRAPHICS_CARD,
      price: 1599,
      stock: 5,
      description: 'Flagship gaming graphics card with advanced ray tracing and AI performance',
      imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400',
      brand: 'NVIDIA',
      specifications: {
        graphicsCard: 'RTX 4090',
        memory: '24GB GDDR6X',
        cooling: 'Triple Fan'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '2',
      name: 'AMD Ryzen 9 7950X',
      category: ProductCategory.PROCESSOR,
      price: 699,
      stock: 10,
      description: 'High-performance 16-core processor for gaming and content creation',
      imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
      brand: 'AMD',
      specifications: {
        processor: '16 Cores, 32 Threads',
        memory: 'DDR5 Support',
        cooling: 'Not Included'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '3',
      name: 'Intel Core i9-14900K',
      category: ProductCategory.PROCESSOR,
      price: 589,
      stock: 8,
      description: '24-core hybrid architecture processor with exceptional gaming performance',
      imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
      brand: 'Intel',
      specifications: {
        processor: '24 Cores (8P+16E), 32 Threads',
        memory: 'DDR5-5600 Support',
        cooling: 'Not Included'
      },
      isFeatured: false,
      createdAt: new Date()
    },
    {
      id: '4',
      name: 'AMD Ryzen 7 7800X3D',
      category: ProductCategory.PROCESSOR,
      price: 449,
      stock: 12,
      description: 'Gaming-focused processor with 3D V-Cache technology',
      imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
      brand: 'AMD',
      specifications: {
        processor: '8 Cores, 16 Threads',
        memory: 'DDR5 Support',
        cooling: 'Not Included'
      },
      isFeatured: true,
      createdAt: new Date()
    },

    // Graphics Cards
    {
      id: '5',
      name: 'AMD Radeon RX 7900 XTX',
      category: ProductCategory.GRAPHICS_CARD,
      price: 999,
      stock: 6,
      description: 'High-end gaming GPU with advanced AMD RDNA 3 architecture',
      imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
      brand: 'AMD',
      specifications: {
        graphicsCard: 'RX 7900 XTX',
        memory: '24GB GDDR6',
        cooling: 'Triple Fan'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '6',
      name: 'NVIDIA GeForce RTX 4070 Ti',
      category: ProductCategory.GRAPHICS_CARD,
      price: 799,
      stock: 15,
      description: 'Powerful mid-range graphics card with DLSS 3 technology',
      imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400',
      brand: 'NVIDIA',
      specifications: {
        graphicsCard: 'RTX 4070 Ti',
        memory: '12GB GDDR6X',
        cooling: 'Dual Fan'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // Motherboards
    {
      id: '7',
      name: 'ASUS ROG Maximus Z790 Hero',
      category: ProductCategory.MOTHERBOARD,
      price: 629,
      stock: 4,
      description: 'Premium gaming motherboard with extensive connectivity and overclocking features',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
      brand: 'ASUS',
      specifications: {
        processor: 'LGA 1700 Socket',
        memory: 'DDR5 7800+ MHz',
        storage: '5x M.2 Slots'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '8',
      name: 'MSI MPG B650 Carbon WiFi',
      category: ProductCategory.MOTHERBOARD,
      price: 329,
      stock: 9,
      description: 'AMD AM5 motherboard with premium features for gaming builds',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
      brand: 'MSI',
      specifications: {
        processor: 'AM5 Socket',
        memory: 'DDR5 6600+ MHz',
        storage: '4x M.2 Slots'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // RAM
    {
      id: '9',
      name: 'Corsair Dominator Platinum RGB 32GB',
      category: ProductCategory.RAM,
      price: 189,
      stock: 20,
      description: 'Premium DDR5 memory with RGB lighting and excellent performance',
      imageUrl: 'https://images.unsplash.com/photo-1594019919638-3318c58bf6e6?w=400',
      brand: 'Corsair',
      specifications: {
        memory: '32GB (2x16GB) DDR5 6000MHz',
        cooling: 'RGB Heat Spreader'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '10',
      name: 'G.Skill Trident Z5 RGB 64GB',
      category: ProductCategory.RAM,
      price: 289,
      stock: 7,
      description: 'High-capacity DDR5 memory kit optimized for gaming and content creation',
      imageUrl: 'https://images.unsplash.com/photo-1594019919638-3318c58bf6e6?w=400',
      brand: 'G.Skill',
      specifications: {
        memory: '64GB (2x32GB) DDR5 6400MHz',
        cooling: 'RGB Heat Spreader'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // Storage
    {
      id: '11',
      name: 'Samsung 990 Pro 2TB NVMe SSD',
      category: ProductCategory.STORAGE,
      price: 179,
      stock: 25,
      description: 'Ultra-fast PCIe 4.0 NVMe SSD for gaming and professional workloads',
      imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
      brand: 'Samsung',
      specifications: {
        storage: '2TB NVMe PCIe 4.0',
        memory: 'LPDDR4 Cache'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '12',
      name: 'WD Black SN850X 4TB',
      category: ProductCategory.STORAGE,
      price: 349,
      stock: 3,
      description: 'High-capacity gaming SSD with exceptional read/write speeds',
      imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
      brand: 'Western Digital',
      specifications: {
        storage: '4TB NVMe PCIe 4.0',
        memory: 'Advanced Cache System'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // Power Supply
    {
      id: '13',
      name: 'Corsair RM1000x Shift',
      category: ProductCategory.POWER_SUPPLY,
      price: 189,
      stock: 8,
      description: '1000W 80+ Gold fully modular power supply with side-mounted connectors',
      imageUrl: 'https://images.unsplash.com/photo-1565343032071-7c24186ad7cd?w=400',
      brand: 'Corsair',
      specifications: {
        powerSupply: '1000W 80+ Gold',
        cooling: '140mm Fluid Dynamic Bearing Fan'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '14',
      name: 'Seasonic Prime TX-1000',
      category: ProductCategory.POWER_SUPPLY,
      price: 279,
      stock: 5,
      description: '80+ Titanium certified premium power supply with exceptional efficiency',
      imageUrl: 'https://images.unsplash.com/photo-1565343032071-7c24186ad7cd?w=400',
      brand: 'Seasonic',
      specifications: {
        powerSupply: '1000W 80+ Titanium',
        cooling: 'Hybrid Silent Fan Control'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // Cooling
    {
      id: '15',
      name: 'NZXT Kraken Z73 RGB',
      category: ProductCategory.COOLING,
      price: 299,
      stock: 6,
      description: '360mm AIO liquid cooler with customizable LCD display',
      imageUrl: 'https://images.unsplash.com/photo-1581822264261-c2fb0b8b85c1?w=400',
      brand: 'NZXT',
      specifications: {
        cooling: '360mm AIO Liquid Cooler',
        processor: 'Universal Compatibility'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '16',
      name: 'Noctua NH-D15 chromax.black',
      category: ProductCategory.COOLING,
      price: 109,
      stock: 12,
      description: 'Premium dual-tower CPU cooler with exceptional air cooling performance',
      imageUrl: 'https://images.unsplash.com/photo-1581822264261-c2fb0b8b85c1?w=400',
      brand: 'Noctua',
      specifications: {
        cooling: 'Dual Tower Air Cooler',
        processor: 'Universal Compatibility'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // Cases
    {
      id: '17',
      name: 'Lian Li O11 Dynamic EVO',
      category: ProductCategory.CASE,
      price: 159,
      stock: 10,
      description: 'Versible mid-tower case with dual chamber design and excellent airflow',
      imageUrl: 'https://images.unsplash.com/photo-1597070889210-bea876b3c995?w=400',
      brand: 'Lian Li',
      specifications: {
        cooling: 'Support for 360mm Radiators',
        storage: 'Multiple Drive Bays'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '18',
      name: 'Corsair 5000D AIRFLOW',
      category: ProductCategory.CASE,
      price: 129,
      stock: 15,
      description: 'Mid-tower case optimized for maximum airflow and cooling performance',
      imageUrl: 'https://images.unsplash.com/photo-1597070889210-bea876b3c995?w=400',
      brand: 'Corsair',
      specifications: {
        cooling: 'Excellent Airflow Design',
        storage: 'Multiple SSD/HDD Mounts'
      },
      isFeatured: false,
      createdAt: new Date()
    },

    // Monitors
    {
      id: '19',
      name: 'Samsung Odyssey G9 Neo',
      category: ProductCategory.MONITOR,
      price: 1499,
      stock: 3,
      description: '49" Super Ultrawide Gaming Monitor with Quantum Mini-LED technology',
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
      brand: 'Samsung',
      specifications: {
        graphicsCard: '5120x1440 Resolution',
        memory: '240Hz Refresh Rate'
      },
      isFeatured: true,
      createdAt: new Date()
    },
    {
      id: '20',
      name: 'ASUS ROG Swift PG32UQX',
      category: ProductCategory.MONITOR,
      price: 2999,
      stock: 2,
      description: '32" 4K Mini-LED Gaming Monitor with G-SYNC Ultimate',
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
      brand: 'ASUS',
      specifications: {
        graphicsCard: '3840x2160 4K Resolution',
        memory: '144Hz Refresh Rate'
      },
      isFeatured: true,
      createdAt: new Date()
    },

    // Accessories
    {
      id: '21',
      name: 'Razer BlackWidow V4 Pro',
      category: ProductCategory.ACCESSORIES,
      price: 229,
      stock: 18,
      description: 'Mechanical gaming keyboard with customizable RGB and macro keys',
      imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
      brand: 'Razer',
      specifications: {
        memory: 'Mechanical Switches',
        storage: 'Programmable Macros'
      },
      isFeatured: false,
      createdAt: new Date()
    },
    {
      id: '22',
      name: 'Logitech G Pro X Superlight',
      category: ProductCategory.ACCESSORIES,
      price: 159,
      stock: 22,
      description: 'Ultra-lightweight wireless gaming mouse with HERO sensor',
      imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
      brand: 'Logitech',
      specifications: {
        memory: '25K DPI Sensor',
        storage: 'Wireless Connectivity'
      },
      isFeatured: true,
      createdAt: new Date()
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProduct(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Omit<Product, 'id' | 'createdAt'>): void {
    const newProduct: Product = {
      ...product,
      id: this.generateId(),
      createdAt: new Date()
    };
    this.products.push(newProduct);
    this.productsSubject.next([...this.products]);
  }

  updateProduct(id: string, product: Partial<Product>): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...product };
      this.productsSubject.next([...this.products]);
    }
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next([...this.products]);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}