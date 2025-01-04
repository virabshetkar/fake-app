import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLayoutComponent {

}
