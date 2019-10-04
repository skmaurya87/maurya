import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl',
  templateUrl: './owl.component.html',
  styleUrls: ['./owl.component.css']
})
export class OwlComponent implements OnInit {
  mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 1, dots: true, loop:true, nav: false, margin:15};
  myCarouselOptions={dots: true, loop:true, nav: true, margin:15, responsive:{ 0:{items:1}, 600:{items:3}, 1000:{items:4}}};



  constructor() {
    let name:string = "images"; 
   }

  ngOnInit() {
    
  }
}
