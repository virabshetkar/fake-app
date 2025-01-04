import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from './sidebar.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly #sidebar = inject(SidebarService);
  readonly #scroller = inject(ViewportScroller);

  close() {
    this.#sidebar.close();
  }

  scrollTo(section: string) {
    this.#sidebar.allowScroll();
    this.#scroller.scrollToAnchor(section);
    this.close();
  }
}
