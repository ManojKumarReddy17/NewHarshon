import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule,RouterModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
