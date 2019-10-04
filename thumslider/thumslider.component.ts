import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-thumslider',
  templateUrl: './thumslider.component.html',
  styleUrls: ['./thumslider.component.css']
})
export class ThumsliderComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  // constructor() { }

  ngOnInit(): void {
 
    this.galleryOptions = [
        {
            width: '100%',
            height: '400px',
            thumbnailsColumns: 7,
            imageAnimation: NgxGalleryAnimation.Slide,
            imageAutoPlay: true,
            imageAutoPlayPauseOnHover: true,
            previewAutoPlay: true,
            previewAutoPlayPauseOnHover: true,
            imageAutoPlayInterval:5000,
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '300px',
            thumbnailsColumns: 4,
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 10,
            thumbnailMargin: 10,
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        },
    ];

    this.galleryImages = [
        {
            small: 'assets/images/1-small.jpeg',
            medium: 'assets/images/1-medium.jpeg',
            big: 'assets/images/1-big.jpeg'
        },
        {
            small: 'assets/images/2-small.jpeg',
            medium: 'assets/images/2-medium.jpeg',
            big: 'assets/images/2-big.jpeg'
        },
        {
            small: 'assets/images/3-small.jpeg',
            medium: 'assets/images/3-medium.jpeg',
            big: 'assets/images/3-big.jpeg'
        },
        {
            small: 'assets/images/4-small.jpeg',
            medium: 'assets/images/4-medium.jpeg',
            big: 'assets/images/4-big.jpeg'
        },
        {
            small: 'assets/images/5-small.jpeg',
            medium: 'assets/images/5-medium.jpeg',
            big: 'assets/images/5-big.jpeg'
        },
        {
            small: 'assets/images/6-small.jpeg',
            medium: 'assets/images/6-medium.jpeg',
            big: 'assets/images/6-big.jpeg'
        },
        {
            small: 'assets/images/7-small.jpeg',
            medium: 'assets/images/7-medium.jpeg',
            big: 'assets/images/7-big.jpeg'
        },
        {
            small: 'assets/images/8-small.jpeg',
            medium: 'assets/images/8-medium.jpeg',
            big: 'assets/images/8-big.jpeg'
        }
    ];
}
}
