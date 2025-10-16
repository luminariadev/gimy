import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="header">
      <div class="header-background"></div>
      <div class="container">
        <div class="logo" routerLink="/">
          <div class="logo-icon">⚡</div>
          <div class="logo-text">
            <h1 class="logo-name">GIMY</h1>
            <span class="tagline">Gaming Hardware</span>
          </div>
        </div>
        
        <nav class="nav">
          <a routerLink="/" class="nav-link" routerLinkActive="active">
            <span class="nav-icon">🎮</span>
            <span class="nav-text">Products</span>
          </a>
          <a routerLink="/new" class="nav-link button-primary">
            <span class="nav-icon">➕</span>
            <span class="nav-text">Add Product</span>
          </a>
        </nav>

        <div class="mobile-menu">
          <button class="menu-toggle" (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" [class.active]="isMenuOpen">
        <a routerLink="/" class="mobile-nav-link" (click)="closeMenu()">
          <span class="nav-icon">🎮</span>
          Products
        </a>
        <a routerLink="/new" class="mobile-nav-link" (click)="closeMenu()">
          <span class="nav-icon">➕</span>
          Add Product
        </a>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, 
        rgba(102, 126, 234, 0.95) 0%, 
        rgba(118, 75, 162, 0.95) 50%,
        rgba(237, 74, 123, 0.95) 100%);
      color: white;
      padding: 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
      z-index: -1;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    /* Logo Styles */
    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0.5rem 0;
    }

    .logo:hover {
      transform: translateY(-2px);
    }

    .logo-icon {
      font-size: 2rem;
      background: linear-gradient(135deg, #fff 0%, #a8edea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      animation: pulse 2s infinite;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-name {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #fff 0%, #a8edea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      letter-spacing: 1px;
    }

    .tagline {
      font-size: 0.75rem;
      opacity: 0.9;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    /* Navigation Styles */
    .nav {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.6rem 1.2rem;
      border-radius: 12px;
      transition: all 0.3s ease;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }

    .nav-link:hover::before {
      left: 100%;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }

    .nav-link.active {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }

    .nav-icon {
      font-size: 1.1rem;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,0.3));
    }

    .nav-text {
      font-size: 0.9rem;
    }

    .button-primary {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
      border: 2px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    }

    .button-primary:hover {
      background: linear-gradient(135deg, #ff5252 0%, #d63031 100%);
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
      transform: translateY(-2px);
    }

    /* Mobile Menu */
    .mobile-menu {
      display: none;
    }

    .menu-toggle {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: white;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .mobile-nav {
      display: none;
      background: linear-gradient(135deg, 
        rgba(102, 126, 234, 0.98) 0%, 
        rgba(118, 75, 162, 0.98) 100%);
      padding: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .mobile-nav.active {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .mobile-nav-link {
      color: white;
      text-decoration: none;
      padding: 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
    }

    .mobile-nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Animations */
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
        height: 60px;
      }

      .nav {
        display: none;
      }

      .mobile-menu {
        display: block;
      }

      .logo-name {
        font-size: 1.5rem;
      }

      .tagline {
        font-size: 0.7rem;
      }

      .logo-icon {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .logo-text {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}