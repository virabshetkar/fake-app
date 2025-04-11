import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCategoriesComponent {
  protected readonly faArrowRight = faArrowRight;
  readonly #router = inject(Router);

  goto(category: string) {
    this.#router.navigate(['/products', category]);
  }
}
