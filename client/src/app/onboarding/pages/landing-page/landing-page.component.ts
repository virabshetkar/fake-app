import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  readonly #route = inject(ActivatedRoute);
  readonly #scroller = inject(ViewportScroller);

  ngOnInit(): void {
    this.#route.fragment.subscribe((fragment) => {
      if (!fragment) return;
      console.log(fragment);
      this.#scroller.scrollToAnchor(fragment);
    });
  }
}
