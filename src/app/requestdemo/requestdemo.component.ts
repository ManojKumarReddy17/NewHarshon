import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
@Component({
  selector: 'app-requestdemo',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './requestdemo.component.html',
  styleUrl: './requestdemo.component.scss'
})
export class RequestdemoComponent {

}
