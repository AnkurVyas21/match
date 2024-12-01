import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  imageObject: Array<object> = [{
    image: 'https://thumbs.dreamstime.com/b/generated-image-country-road-mountains-summer-foggy-morning-nature-background-landscape-green-trees-grass-hill-330706557.jpg',
    thumbImage: 'https://thumbs.dreamstime.com/b/generated-image-country-road-mountains-summer-foggy-morning-nature-background-landscape-green-trees-grass-hill-330706557.jpg',
    alt: 'alt of image',
    title: 'title of image',
}, {
    image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg', // Support base64 image
    thumbImage: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://img.goodfon.com/wallpaper/big/6/da/okean-tropical-summer-sea-sunset-crystal-more-pesok-pliazh-m.webp', // Support base64 image
  thumbImage: 'https://img.goodfon.com/wallpaper/big/6/da/okean-tropical-summer-sea-sunset-crystal-more-pesok-pliazh-m.webp', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://img.freepik.com/premium-photo/perfect-tropical-beach-landscape-nature-sea-ocean_743855-6287.jpg', // Support base64 image
  thumbImage: 'https://img.freepik.com/premium-photo/perfect-tropical-beach-landscape-nature-sea-ocean_743855-6287.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  video: 'https://www.youtube.com/embed/xRPjKQtRXR8?si=PZtl6tGj5e-bHoX5', // Youtube url
},
];
}