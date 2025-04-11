import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

const PRODUCT_CATEGORIES = [
  {
    name: 'Interior Emulsions',
    img: '<image_path>',
    product_categories: [
      {
        name: 'Luxury Interior',
        img: '<image_path>',
        products: [
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
        ],
      },
      {
        name: 'Premium Interior',
        img: '<image_path>',
        products: [
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
        ],
      },
      {
        name: 'Budget Friendly Interior',
        img: '<image_path>',
        products: [
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
        ],
      },
      {
        name: 'Ceiling Protect',
        img: '<image_path>',
        products: [
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
          { name: 'Product', img: '<image_path>' },
        ],
      },
    ],
  },
];
