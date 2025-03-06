import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
