import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
@Component({
  selector: 'app-mysql',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './mysql.component.html',
  styleUrl: './mysql.component.scss'
})
export class MysqlComponent {

}
