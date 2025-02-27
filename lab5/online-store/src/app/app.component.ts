import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Category, CATEGORIES } from './models/category';
import { Product } from './models/product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-store';
  categories = CATEGORIES;
  selectedCategory: Category | null = null;
  
  // Use your existing products but add missing properties
  // This is just a simplified example, you'll need to add more products
  products: Product[] = [
    {
      id: 1,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium",
      name: "Коммутатор Mercusys MS105G",
      description: "",
      rating: 5,
      storeLink: "https://kaspi.kz/shop/p/kommutator-mercusys-ms105g-100571902/?c=750000000",
      category: "peripheral devices",
      likes: 0,
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/h0d/64015869214750.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd9/h30/64015872557086.jpg?format=gallery-medium"
      ]
    },
    {
      id: 2,
      image: "https://resources.cdn-kaspi.kz/img/m/p/he5/h4a/84701020356638.jpg?format=gallery-medium",
      name: "Коврик для мыши Inova Death Life",
      description: "",
      rating: 5,
      storeLink: "https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000",
      category: "peripheral devices",
      likes: 0,
      imageGallery: [
      ]
    },
    {
      id: 10,
      category: "Tablets",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium",
      name: "Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый",
      description: "",
      rating: 5, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium"
      ]
    },
    {
      id: 3,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h98/65744266854430.jpg?format=gallery-medium",
      name: "Держатель для проводов Набор держателей кабелей 16 шт прозрачные",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/zaschita-provodov-ot-detei-i-zhivotnyh-2m-chernyi-117777991/?c=750000000",
      category: "peripheral devices",
      likes: 0,
      imageGallery: []
    },
    {
      id: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p07/pde/22285578.jpg?format=gallery-medium",
      name: "Антистресс кнопка ENTER LE000009 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/antistress-knopka-enter-le000009-chernyi-113601009/?c=750000000",
      category: "peripheral devices",
      likes: 0,
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/p07/pde/22285578.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/peb/pdd/22285579.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p62/pdb/22285581.jpg?format=gallery-medium"
      ]
    },
    {
      id: 9,
      category: "Accessories",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
      name: "SL-CX07 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/sl-cx07-chernyi-117498170/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3b/h51/87199955124254.jpg?format=gallery-medium",
      ]
    },
    {
      id: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium",
      name: "Клавиатура AULA F75 белый",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000",
      category: "peripheral devices",
      likes: 0,
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h74/h31/85519448244254.png?format=gallery-medium"
      ]
    },
    {
      id: 6,
      category: "Furniture",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium",
      name: "Блендер Slaouwo HB-2075 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000",
      imageGallery: [
      ]
    },
    {
      id: 7,
      category: "Furniture",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h66/h2b/85356927713310.jpg?format=gallery-medium",
      name: "Распашной шкаф IMPERIAL Алёна 3Д, 120.2x190.5х46.6 см, белый, бежевый",
      description: "",
      rating: 5, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/raspashnoi-shkaf-imperial-aljona-3d-120-2x190-5h46-6-sm-belyi-bezhevyi-104713427/?c=750000000",
      imageGallery: [
      ]
    },
    {
      id: 8,
      category: "Furniture",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hce/h42/63867370438686.jpg?format=gallery-medium",
      name: "Матрас Intex 64765, 203x152x25 см, насос внешний",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/matras-intex-64765-203x152x25-sm-nasos-vneshnii-100067553/?c=750000000",
      imageGallery: [
      ]
    },
    {
      id: 10,
      category: "Tablets",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium",
      name: "Планшет Xiaomi Redmi Pad SE 11 дюйм 8 Гб/256 Гб серый",
      description: "",
      rating: 4, // or any number from 1-5
      imageGallery: [],
    },
    {
      id: 11,
      category: "peripheral devices",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium",
      name: "Мышь Logitech G102 LIGHTSYNC черный",
      description: "",
      rating: 4, // or any number from 1-5
      imageGallery: [],
    },
    {
      id: 12,
      category: "Tablets",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-medium",
      name: "Планшет Apple iPad Air 2024 Wi-Fi 11 11 дюйм 8 Гб/128 Гб серый",
      description: "",
      rating: 5, // or any number from 1-5
    },
    {
      id: 13,
      category: "Tablets",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/xiaomi-redmi-pad-pro-12-1-djuim-8-gb-256-gb-seryi-120323748/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7e/hd3/86260935032862.jpg?format=gallery-medium",
      name: "Планшет Xiaomi Redmi Pad Pro 12.1 дюйм 8 Гб/256 Гб серый",
      description: "",
      rating: 5, // or any number from 1-5
    },
    {
      id: 14,
      category: "Tablets",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/samsung-galaxy-tab-s7-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium",
      name: "Планшет Samsung Galaxy Tab S7 11 дюйм 8 Гб/256 Гб серый",
      description: "",
      rating: 4, // or any number from 1-5
    },
    {
      id: 15,
      category: "Furniture",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/uglovaya-polka-dlya-vannoi-komnaty-3-yarusnaya-105x30x30-sm-krasnyi-117777991/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h98/65744266854430.jpg?format=gallery-medium",
      name: "Угловая полка для ванной комнаты 3-ярусная 105x30x30 см красный",
      description: "",
      rating: 4, // or any number from 1-5

    },
    {
      id: 16,
      category: "Furniture",
      likes: 0,
      storeLink: "https://kaspi.kz/shop/p/comfort-dvuspal-naja-160x200-sm-s-matrasom-pod-jomnyi-mehanizm-seryi-mul-tikolor-120864846/?c=750000000",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h40/h8b/86397306634270.jpg?format=gallery-medium",
      name: "Кровать двуспальная 160x200 см с матрасом подъемный механизм серый мультиколор",
      description: "",
      rating: 5, // or any number from 1-5
    },
    {
      id: 17,
      category: "Accessories",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
      name: "SL-CX07 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/sl-cx07-chernyi-117498170/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3b/h51/87199955124254.jpg?format=gallery-medium",
      ]
    },
    {
      id: 18,
      category: "Accessories",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
      name: "SL-CX07 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/sl-cx07-chernyi-117498170/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3b/h51/87199955124254.jpg?format=gallery-medium",
      ]
    },
    {
      id: 19,
      category: "Accessories",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
      name: "SL-CX07 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/sl-cx07-chernyi-117498170/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3b/h51/87199955124254.jpg?format=gallery-medium",
      ]
    },
    {
      id: 20,
      category: "Accessories",
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
      name: "SL-CX07 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/sl-cx07-chernyi-117498170/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/h3f/85531686764574.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3b/h51/87199955124254.jpg?format=gallery-medium",
      ]
    },
    
  ];

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.products.filter(p => p.category === this.selectedCategory?.name);
  }
  
  onRemoveProduct(product: Product): void {
    this.products = this.products.filter(p => p.id !== product.id);
  }
  
  onLikeProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index].likes++;
      // Create a new array reference to trigger change detection
      this.products = [...this.products];
    }
  }
}