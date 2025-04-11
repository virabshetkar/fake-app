import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: ProductCategoriesComponent,
      },
      {
        path: 'products/:id',
        component: ProductsComponent,
      },
    ],
  },
];
