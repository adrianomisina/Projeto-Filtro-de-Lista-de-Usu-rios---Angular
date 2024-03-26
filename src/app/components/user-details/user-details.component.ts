import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',

  providers: [PipesModule]
})
export class UserDetailsComponent {
  @Input({required: true}) user: IUser = {} as IUser;
}
