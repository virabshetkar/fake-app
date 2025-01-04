import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarUserComponent {

}
