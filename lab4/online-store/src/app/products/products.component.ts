import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium",
      name: "Коммутатор Mercusys MS105G",
      description: "",
      rating: 5,
      storeLink: "https://kaspi.kz/shop/p/kommutator-mercusys-ms105g-100571902/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/h0d/64015869214750.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd9/h30/64015872557086.jpg?format=gallery-medium"
      ]
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/he5/h4a/84701020356638.jpg?format=gallery-medium",
      name: "Коврик для мыши Inova Death Life",
      description: "",
      rating: 5,
      storeLink: "https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000",
      imageGallery: [
      ]
    },
    {
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
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h98/65744266854430.jpg?format=gallery-medium",
      name: "Держатель для проводов Набор держателей кабелей 16 шт прозрачные",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/zaschita-provodov-ot-detei-i-zhivotnyh-2m-chernyi-117777991/?c=750000000",
      imageGallery: []
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/p07/pde/22285578.jpg?format=gallery-medium",
      name: "Антистресс кнопка ENTER LE000009 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/antistress-knopka-enter-le000009-chernyi-113601009/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/p07/pde/22285578.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/peb/pdd/22285579.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p62/pdb/22285581.jpg?format=gallery-medium"
      ]
    },
    {
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
      image: "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium",
      name: "Клавиатура AULA F75 белый",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000",
      imageGallery: [
        "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h74/h31/85519448244254.png?format=gallery-medium"
      ]
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium",
      name: "Блендер Slaouwo HB-2075 черный",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000",
      imageGallery: [
      ]
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h66/h2b/85356927713310.jpg?format=gallery-medium",
      name: "Распашной шкаф IMPERIAL Алёна 3Д, 120.2x190.5х46.6 см, белый, бежевый",
      description: "",
      rating: 5, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/raspashnoi-shkaf-imperial-aljona-3d-120-2x190-5h46-6-sm-belyi-bezhevyi-104713427/?c=750000000",
      imageGallery: [
      ]
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/hce/h42/63867370438686.jpg?format=gallery-medium",
      name: "Матрас Intex 64765, 203x152x25 см, насос внешний",
      description: "",
      rating: 4, // or any number from 1-5
      storeLink: "https://kaspi.kz/shop/p/matras-intex-64765-203x152x25-sm-nasos-vneshnii-100067553/?c=750000000",
      imageGallery: [
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  shareProduct(product: Product, platform: string): void {
    const message = encodeURIComponent(`Check out this product: ${product.name}\n${product.storeLink}`);
    let shareUrl = '';
    
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${message}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(product.storeLink)}&text=${encodeURIComponent(product.name)}`;
    }
    
    window.open(shareUrl, '_blank');
  }
}