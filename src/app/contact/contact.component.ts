import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  latitude!: number;
  longitude!: number;
  locationData: any;
  mapUrl!: string;

  fetchLocation() {
    if (this.isValidCoordinates(this.latitude, this.longitude)) {
    
      this.mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${this.latitude},${this.longitude}&zoom=14`;
      
      // Simulating fetching location data. Replace with API calls.
      this.locationData = {
        latitude: this.latitude,
        longitude: this.longitude,
        description: 'Sample location data',
      };
    } else {
      alert('Invalid latitude or longitude!');
    }
  }

  isValidCoordinates(lat: number, lng: number): boolean {
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  }
}
