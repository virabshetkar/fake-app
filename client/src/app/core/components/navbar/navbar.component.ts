import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly #scroller = inject(ViewportScroller);
  readonly faBars = faBars;
  readonly #sidebar = inject(SidebarService);

  readonly isCompact = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map((v) => v.matches))
  );

  navbarHeight = computed(() => (this.isCompact() ? 48 : 64));

  constructor() {
    effect(() => {
      this.#scroller.setOffset([0, this.navbarHeight()]);
    });

    effect(() => {
      if (!this.isCompact()) {
        this.#sidebar.close();
      }
    });
  }

  scrollTo(section: string) {
    this.#scroller.scrollToAnchor(section);
  }

  openSidebar() {
    this.#sidebar.open();
  }
}
