import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';

import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    '[class.compact]': 'isCompact()',
  },
})
export class AppComponent {
  title = 'client';

  readonly #document = inject(DOCUMENT);

  readonly isCompact = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map((v) => v.matches))
  );

  constructor() {
    effect(() => {
      if (this.isCompact()) {
        this.#document.documentElement.classList.add('compact');
      } else {
        this.#document.documentElement.classList.remove('compact');
      }
    });
  }
}
