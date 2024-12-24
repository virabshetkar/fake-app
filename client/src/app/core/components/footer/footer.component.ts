import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  faFacebook = faFacebook;
  faPhone = faPhone;
  faEmail = faEnvelope;
  faInstagram = faInstagram;
}
