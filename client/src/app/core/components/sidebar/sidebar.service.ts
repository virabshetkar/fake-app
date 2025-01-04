import { ComponentRef, inject, Injectable } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { SidebarComponent } from './sidebar.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  readonly #overlay = inject(Overlay);
  #overlayRef?: OverlayRef;
  #componentRef?: ComponentRef<SidebarComponent>;

  open() {
    this.#overlayRef = this.#overlay.create({
      positionStrategy: this.#overlay.position().global().right(),
      scrollStrategy: this.#overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'backdrop',
    });

    const sub = this.#overlayRef.backdropClick().subscribe(() => {
      this.close();
    });

    this.#componentRef = this.#overlayRef.attach(
      new ComponentPortal(SidebarComponent)
    );

    this.#componentRef.onDestroy(() => {
      sub.unsubscribe();
    });
  }

  allowScroll() {
    this.#overlayRef?.updateScrollStrategy(
      this.#overlay.scrollStrategies.reposition()
    );
  }

  close() {
    this.#overlayRef?.detach();
  }
}
