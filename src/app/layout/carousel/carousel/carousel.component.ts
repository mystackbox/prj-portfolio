import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images = [
    'img/carousel/slider1.jpg',
    'img/carousel/slider2.jpg',
    'img/carousel/slider3.jpg',
    'img/carousel/slider4.jpg',
  ];
}
