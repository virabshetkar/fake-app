import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    '[style.height.px]': 'navbarHeight()',
  },
})
export class NavbarComponent {
  readonly #scroller = inject(ViewportScroller);
  readonly faBars = faBars;

  readonly isCompact = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Handset])
      .pipe(map((v) => v.matches))
  );

  navbarHeight = computed(() => (this.isCompact() ? 48 : 64));

  constructor() {
    effect(() => {
      this.#scroller.setOffset([0, this.navbarHeight()]);
    });
  }

  _handleNavClick(section: string) {
    this.#scroller.scrollToAnchor(section);
  }
}
