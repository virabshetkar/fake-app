import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    '[class.compact]': 'isCompact()',
  },
})
export class AppComponent {
  title = 'client';

  readonly isCompact = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Handset])
      .pipe(map((v) => v.matches))
  );
}
