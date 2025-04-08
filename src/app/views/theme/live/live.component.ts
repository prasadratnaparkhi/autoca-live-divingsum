import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-live',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit, OnDestroy {
  // Initial coordinates for Pimpri-Chinchwad, Maharashtra, India
  initialLatitude = 18.6278;
  initialLongitude = 73.8139;
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = { draggable: false, title: 'Current Location' };
  center: google.maps.LatLngLiteral;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    // You can add more map options here if needed
  };
  markerPosition: google.maps.LatLngLiteral;
  updateInterval = 5000; // Update location every 5 seconds
  locationUpdateSubscription: Subscription | undefined;

  constructor() {
    this.center = { lat: this.initialLatitude, lng: this.initialLongitude };
    this.markerPosition = { lat: this.initialLatitude, lng: this.initialLongitude };
  }

  ngOnInit() {
    this.startLocationUpdates();
  }

  ngOnDestroy() {
    this.stopLocationUpdates();
  }

  startLocationUpdates() {
    this.locationUpdateSubscription = interval(this.updateInterval).subscribe(() => {
      this.getCurrentLocation();
    });
  }

  stopLocationUpdates() {
    if (this.locationUpdateSubscription) {
      this.locationUpdateSubscription.unsubscribe();
    }
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.updateMapPosition(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true, // Request high accuracy (may drain battery)
          timeout: 10000,           // Maximum time to wait for location
          maximumAge: 0,            // Don't use cached location
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  updateMapPosition(latitude: number, longitude: number) {
    this.center = { lat: latitude, lng: longitude };
    this.markerPosition = { lat: latitude, lng: longitude };
  }
}
