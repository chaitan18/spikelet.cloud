import { Component, OnInit,ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import {MyUserServService} from './my-user-serv.service';
import { HttpClient } from '@angular/common/http';

// import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';

declare var $:any;
declare global {
  interface Array<T> {
    ip(): any;
  }
}
import { Router } from '@angular/router';
@Component({
  selector: 'app-spikelethome',
  templateUrl: './spikelethome.component.html',
  styleUrls: ['./spikelethome.component.css']
})
// @ViewChild('nav') slider: NgImageSliderComponent;
export class SpikeletHomeComponent implements OnInit {
 // ipAddress:any;
 //ipAddress:any;
 ipAddress:any = [];
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
}
];


vrvideosObject: Array<object> = [{
  video: 'https://youtu.be/ix9Ioymijfw',
  //posterImage: 'assets/images/apps/img1.jpg',
  title: 'title of image'
}, {
  video: 'https://youtu.be/CIirWY63EyQ', // Support base64 image
  //posterImage: 'assets/images/apps/img2.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
},
{
video: 'https://youtu.be/irTz0vg_HX8', // Support base64 image
//posterImage: 'assets/images/apps/img3.jpg', // Support base64 image
title: 'Image title', //Optional: You can use this key if want to show image with title
},
{
video: 'https://youtu.be/fvu5FxKuqdQ', // Support base64 image
//posterImage: 'assets/images/apps/img3.jpg', // Support base64 image
title: 'Image title', //Optional: You can use this key if want to show image with title
},
{
video: 'https://youtu.be/fvu5FxKuqdQ', // Support base64 image
//posterImage: 'assets/images/apps/img3.jpg', // Support base64 image
title: 'Image title', //Optional: You can use this key if want to show image with title
},
{
video: 'https://youtu.be/irTz0vg_HX8', // Support base64 image
//posterImage: 'assets/images/apps/img3.jpg', // Support base64 image
title: 'Image title', //Optional: You can use this key if want to show image with title
} 
];
  constructor(public router: Router,private userService: MyUserServService,private httpClient : HttpClient) { 
    
  }
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
  //public ipAddress:any;
  ngOnInit() {
    //console.log(this.ipAddress);
    //console.log("ip");
    // this.userService.getIpAddress().subscribe(data => {
    //   console.log(data);
    // });
    
    // this.httpClient.post('https://jsonip.com','').subscribe((res : any[])=>{
     
    //        this.ipAddress = res.ip;
    //        console.log("IN=========="+this.ipAddress);
    // });
    // console.log("OUT=========="+this.ipAddress);
    
    this.listlocationdetails();
    
  }

  listlocationdetails(){
    this.httpClient.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      this.ipAddress = data.ip;
     
      
    })
    console.log('th data', this.ipAddress);
    this.httpClient.get<{ip:string}>('https://freegeoip.app/json/'+this.ipAddress)
    .subscribe( data => {
      //console.log('th data', data);
      
    })
  }
   

}

