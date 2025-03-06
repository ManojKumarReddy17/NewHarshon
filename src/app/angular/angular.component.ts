import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {

}
