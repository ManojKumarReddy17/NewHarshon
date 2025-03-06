import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
@Component({
  selector: 'app-jewellery',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './jewellery.component.html',
  styleUrl: './jewellery.component.scss'
})
export class JewelleryComponent {

}
