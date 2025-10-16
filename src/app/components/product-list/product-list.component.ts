import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  template: `
    <app-header></app-header>
    
    <main class="container">
      <div class="page-header">
        <h2>Gaming Hardware Products</h2>
        <p>Build your ultimate gaming setup</p>
      </div>

      <div class="products-grid" [@listAnimation]>
        <div 
          *ngFor="let product of products" 
          class="product-card"
          [@itemAnimation]
        >
          <div class="product-image">
            <img [src]="product.imageUrl" [alt]="product.name">
            <div class="product-badge" *ngIf="product.isFeatured">Featured</div>
          </div>
          
          <div class="product-content">
            <div class="product-category">{{ product.category }}</div>
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            
            <div class="product-specs">
              <div class="spec" *ngIf="product.specifications.processor">
                <strong>CPU:</strong> {{ product.specifications.processor }}
              </div>
              <div class="spec" *ngIf="product.specifications.graphicsCard">
                <strong>GPU:</strong> {{ product.specifications.graphicsCard }}
              </div>
              <div class="spec" *ngIf="product.specifications.memory">
                <strong>Memory:</strong> {{ product.specifications.memory }}
              </div>
            </div>

            <div class="product-footer">
              <div class="price-stock">
                <div class="price">{{ '$' + product.price }}</div>
                <div class="stock" [class.low-stock]="product.stock < 5">
                  {{ product.stock }} in stock
                </div>
              </div>
              
              <div class="product-actions">
                <button 
                  class="btn btn-edit"
                  [routerLink]="['/edit', product.id]"
                >
                  Edit
                </button>
                <button 
                  class="btn btn-delete"
                  (click)="deleteProduct(product.id)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="products.length === 0">
        <h3>No products found</h3>
        <p>Start by adding your first gaming hardware product!</p>
        <a routerLink="/new" class="btn btn-primary">Add Product</a>
      </div>
    </main>
  `,
  styles: `
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .page-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .page-header h2 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-header p {
      color: #6b7280;
      font-size: 1.1rem;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
      border: 1px solid #e5e7eb;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .product-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .product-card:hover .product-image img {
      transform: scale(1.05);
    }

    .product-badge {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: #f59e0b;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .product-content {
      padding: 1.5rem;
    }

    .product-category {
      color: #667eea;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .product-name {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
      color: #1f2937;
    }

    .product-description {
      color: #6b7280;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .product-specs {
      margin-bottom: 1rem;
    }

    .spec {
      font-size: 0.875rem;
      color: #4b5563;
      margin-bottom: 0.25rem;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price-stock .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #059669;
    }

    .stock {
      font-size: 0.875rem;
      color: #6b7280;
    }

    .low-stock {
      color: #dc2626;
      font-weight: 600;
    }

    .product-actions {
      display: flex;
      gap: 0.5rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-block;
      text-align: center;
    }

    .btn-edit {
      background: #3b82f6;
      color: white;
    }

    .btn-edit:hover {
      background: #2563eb;
      transform: translateY(-1px);
    }

    .btn-delete {
      background: #ef4444;
      color: white;
    }

    .btn-delete:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }

    .btn-primary {
      background: #667eea;
      color: white;
    }

    .btn-primary:hover {
      background: #5a6fd8;
      transform: translateY(-1px);
    }

    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: #6b7280;
    }

    .empty-state h3 {
      color: #374151;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
      
      .product-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
      
      .product-actions {
        width: 100%;
      }
      
      .btn {
        flex: 1;
      }
    }
  `,
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.3s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
    }
  }
}