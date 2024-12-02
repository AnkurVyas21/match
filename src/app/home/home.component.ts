import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  imageSize = { width: 1000, height: 500, space: 3 }; // Default desktop size

  imageObject: Array<object> = [{
    image: './assets/image1.png',
    thumbImage: './assets/image1.png',
    alt: 'alt of image',
    title: 'title of image',
}, {
    image: './assets/image2.png', // Support base64 image
    thumbImage: './assets/image2.png', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: './assets/image3.png', // Support base64 image
  thumbImage: './assets/image3.png', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: './assets/image4.png', // Support base64 image
  thumbImage: './assets/image4.png', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: './assets/image5.png', // Support base64 image
  thumbImage: './assets/image5.png', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  video: 'https://www.youtube.com/embed/xRPjKQtRXR8?si=PZtl6tGj5e-bHoX5', // Youtube url
},
];


ngOnInit() {
  this.updateImageSize(window.innerWidth); // Initialize image size based on the current window width
}

@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.updateImageSize(event.target.innerWidth); // Update image size on window resize
}

updateImageSize(screenWidth: number) {
  if (screenWidth <= 800) { // Tablet view
    this.imageSize = { width: 400, height: 300, space: 2 };
  } else if (screenWidth <= 480) { // Mobile view
    this.imageSize = { width: 320, height: 180, space: 1 };
  } else { // Desktop view
    this.imageSize = { width: 1000, height: 500, space: 3 };
  }
}
}