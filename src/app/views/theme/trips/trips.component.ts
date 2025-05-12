import { Component, OnInit } from '@angular/core';

interface Trip {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-theme-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'] // You can create a separate CSS file, or include styles inline in the .html
})
export class TripsComponent implements OnInit {

  trips: Trip[] = [
    {
      title: 'Trip to Paris',
      description: 'Explore the beautiful city of Paris, visit the Eiffel Tower, and enjoy French cuisine.',
      imageUrl: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Paris', // Example URL, replace with actual image URL
    },
    {
      title: 'Adventure in the Amazon',
      description: 'Experience the wonders of the Amazon rainforest, discover exotic wildlife, and navigate the river.',
      imageUrl: 'https://via.placeholder.com/400x300/8884d8/FFFFFF?text=Amazon',  // Example URL
    },
    {
      title: 'Skiing in Switzerland',
      description: 'Hit the slopes in the Swiss Alps, enjoy breathtaking mountain views, and relax in cozy chalets.',
      imageUrl: 'https://via.placeholder.com/400x300/00C49F/FFFFFF?text=Switzerland', // Example URL
    },
     {
      title: 'Tour of Tokyo',
      description: 'Visit the capital of Japan, experience unique culture, and eat delicious food.',
      imageUrl: 'https://via.placeholder.com/400x300/FF8042/FFFFFF?text=Tokyo', // Example
    },
  ];

  constructor() { }

  ngOnInit(): void {
    //  You could fetch trip data from a service or an API here
  }

}