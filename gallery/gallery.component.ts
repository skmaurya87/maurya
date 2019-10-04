import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myCarouselImages =[1,2,3,4,5,6,7,8].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  constructor() {
    }
  ngOnInit() {

}
}
