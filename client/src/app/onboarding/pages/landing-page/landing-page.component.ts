import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  EnvironmentInjector,
  runInInjectionContext,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.compact]': 'isCompact()',
  },
})
export class LandingPageComponent implements OnInit {
  readonly #route = inject(ActivatedRoute);
  readonly #scroller = inject(ViewportScroller);
  readonly #environmnent = inject(EnvironmentInjector);

  readonly isCompact = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map((v) => v.matches))
  );

  ngOnInit() {
    runInInjectionContext(this.#environmnent, () => {
      this.#route.fragment.pipe(takeUntilDestroyed()).subscribe((fragment) => {
        if (!fragment) return;
        console.log(fragment);
        this.#scroller.scrollToAnchor(fragment);
      });
    });
  }
}
