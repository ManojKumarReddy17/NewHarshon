import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [RouterModule,RouterOutlet,CommonModule],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})
export class AwsComponent {
  cardId: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.cardId = id === 'azure' ? 1 : (id === 'aws' ? 2 : null); // Convert 'azure' and 'aws' to 1 and 2
    });
  }
}
