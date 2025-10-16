import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product, ProductCategory } from '../../models/product.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HeaderComponent],
  template: `
    <app-header></app-header>
    
    <main class="container">
      <div class="form-container" [@fadeIn]>
        <div class="form-header">
          <h2>{{ isEditMode ? 'Edit Product' : 'Add New Product' }}</h2>
          <p>{{ isEditMode ? 'Update your product details' : 'Add a new gaming hardware product to your store' }}</p>
        </div>

        <form [formGroup]="productForm" (ngSubmit)="onSubmit()" class="product-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Product Name *</label>
              <input
                id="name"
                type="text"
                formControlName="name"
                placeholder="e.g., NVIDIA GeForce RTX 4090"
                [class.error]="isFieldInvalid('name')"
              >
              <div class="error-message" *ngIf="isFieldInvalid('name')">
                Product name is required
              </div>
            </div>

            <div class="form-group">
              <label for="category">Category *</label>
              <select
                id="category"
                formControlName="category"
                [class.error]="isFieldInvalid('category')"
              >
                <option value="">Select Category</option>
                <option *ngFor="let category of categories" [value]="category">
                  {{category}}
                </option>
              </select>
              <div class="error-message" *ngIf="isFieldInvalid('category')">
                Category is required
              </div>
            </div>

            <div class="form-group">
              <label for="brand">Brand *</label>
              <input
                id="brand"
                type="text"
                formControlName="brand"
                placeholder="e.g., NVIDIA, AMD, Intel"
                [class.error]="isFieldInvalid('brand')"
              >
              <div class="error-message" *ngIf="isFieldInvalid('brand')">
                Brand is required
              </div>
            </div>

            <div class="form-group">
              <label for="price">Price ($) *</label>
              <input
                id="price"
                type="number"
                formControlName="price"
                placeholder="0.00"
                min="0"
                step="0.01"
                [class.error]="isFieldInvalid('price')"
              >
              <div class="error-message" *ngIf="isFieldInvalid('price')">
                Valid price is required
              </div>
            </div>

            <div class="form-group">
              <label for="stock">Stock Quantity *</label>
              <input
                id="stock"
                type="number"
                formControlName="stock"
                placeholder="0"
                min="0"
                [class.error]="isFieldInvalid('stock')"
              >
              <div class="error-message" *ngIf="isFieldInvalid('stock')">
                Stock quantity is required
              </div>
            </div>

            <div class="form-group full-width">
              <label for="description">Description *</label>
              <textarea
                id="description"
                formControlName="description"
                placeholder="Describe the product features and specifications..."
                rows="4"
                [class.error]="isFieldInvalid('description')"
              ></textarea>
              <div class="error-message" *ngIf="isFieldInvalid('description')">
                Description is required
              </div>
            </div>

            <div class="form-group full-width">
              <label for="imageUrl">Image URL *</label>
              <input
                id="imageUrl"
                type="url"
                formControlName="imageUrl"
                placeholder="https://example.com/image.jpg"
                [class.error]="isFieldInvalid('imageUrl')"
              >
              <div class="error-message" *ngIf="isFieldInvalid('imageUrl')">
                Valid image URL is required
              </div>
            </div>

            <div class="form-group full-width">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="isFeatured">
                <span class="checkmark"></span>
                Feature this product
              </label>
            </div>

            <div class="form-group full-width">
              <h3>Specifications</h3>
              <div class="specs-grid">
                <div class="form-group">
                  <label for="processor">Processor</label>
                  <input
                    id="processor"
                    type="text"
                    formControlName="processor"
                    placeholder="e.g., Intel Core i9-13900K"
                  >
                </div>

                <div class="form-group">
                  <label for="graphicsCard">Graphics Card</label>
                  <input
                    id="graphicsCard"
                    type="text"
                    formControlName="graphicsCard"
                    placeholder="e.g., RTX 4090"
                  >
                </div>

                <div class="form-group">
                  <label for="memory">Memory</label>
                  <input
                    id="memory"
                    type="text"
                    formControlName="memory"
                    placeholder="e.g., 32GB DDR5"
                  >
                </div>

                <div class="form-group">
                  <label for="storage">Storage</label>
                  <input
                    id="storage"
                    type="text"
                    formControlName="storage"
                    placeholder="e.g., 2TB NVMe SSD"
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" routerLink="/">
              Cancel
            </button>
            <button 
              type="submit" 
              class="btn btn-primary"
              [disabled]="productForm.invalid || productForm.pristine"
            >
              {{ isEditMode ? 'Update Product' : 'Add Product' }}
            </button>
          </div>
        </form>
      </div>
    </main>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .form-container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .form-header h2 {
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .form-header p {
      color: #6b7280;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .full-width {
      grid-column: 1 / -1;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #374151;
    }

    input, select, textarea {
      padding: 0.75rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.2s ease;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    input.error, select.error, textarea.error {
      border-color: #ef4444;
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-weight: normal;
    }

    .checkbox-label input {
      margin-right: 0.5rem;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #e5e7eb;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-block;
      text-align: center;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
    }

    .btn-primary {
      background: #667eea;
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: #5a6fd8;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: #6b7280;
      color: white;
    }

    .btn-secondary:hover {
      background: #4b5563;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      
      .specs-grid {
        grid-template-columns: 1fr;
      }
      
      .form-actions {
        flex-direction: column;
      }
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId: string | null = null;
  categories = Object.values(ProductCategory);

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.createForm();
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    
    if (this.productId) {
      this.isEditMode = true;
      const product = this.productService.getProduct(this.productId);
      if (product) {
        this.productForm.patchValue({
          ...product,
          processor: product.specifications.processor || '',
          graphicsCard: product.specifications.graphicsCard || '',
          memory: product.specifications.memory || '',
          storage: product.specifications.storage || ''
        });
      }
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      isFeatured: [false],
      processor: [''],
      graphicsCard: [''],
      memory: [''],
      storage: ['']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.productForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      
      const productData = {
        name: formValue.name,
        category: formValue.category,
        brand: formValue.brand,
        price: formValue.price,
        stock: formValue.stock,
        description: formValue.description,
        imageUrl: formValue.imageUrl,
        isFeatured: formValue.isFeatured,
        specifications: {
          processor: formValue.processor,
          graphicsCard: formValue.graphicsCard,
          memory: formValue.memory,
          storage: formValue.storage
        }
      };

      if (this.isEditMode && this.productId) {
        this.productService.updateProduct(this.productId, productData);
      } else {
        this.productService.addProduct(productData);
      }

      this.router.navigate(['/']);
    }
  }
}