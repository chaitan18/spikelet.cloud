import { Component, OnInit,ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
// import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';

declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-spikelethome',
  templateUrl: './spikelethome.component.html',
  styleUrls: ['./spikelethome.component.css']
})
// @ViewChild('nav') slider: NgImageSliderComponent;
export class SpikeletHomeComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: 'assets/images/apps/img1.jpg',
    thumbImage: 'assets/images/apps/img1.jpg',
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: 'assets/images/apps/img2.jpg', // Support base64 image
    thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
 },
{
  image: 'assets/images/apps/img3.jpg', // Support base64 image
  thumbImage: 'assets/images/apps/img3.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
} //, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }, {
//   image: 'assets/images/apps/img2.jpg', // Support base64 image
//   thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
//   title: 'Image title', //Optional: You can use this key if want to show image with title
//   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
// }
];
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
    // var slideIndex = 1;
    // showDivs(slideIndex);
    
    // function plusDivs(n) {
    //   showDivs(slideIndex += n);
    // }
    
    // function showDivs(n) {
    //   var i;
    //   var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    //   if (n > x.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = x.length}
    //   for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";  
    //   }
    //   x[slideIndex-1].style.display = "block";  
    // }
  }
  ngOnInit() {
   
 
  }
   

}

