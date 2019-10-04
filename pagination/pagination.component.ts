import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private http:HttpClient) { 
    let pagination:string = "p"; 
    // let p:number = 1;

  }
  myCarouselOptions={dots: true, loop:true, nav: true, margin:15, responsive:{ 0:{items:2}, 600:{items:4}, 1000:{items:5}}};

  resData: any;
  letNews: any;
  
public pageLimitAndIndex = {limit: 20, index: 0};
p: Number = 1;
totalMemberCount: Number = 0;
  


  
  ngOnInit() {
    this.letNewss();
  }
  letNewss()
  {
    let url="https://jsonplaceholder.typicode.com/photos";
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res)
      this.resData=res;
      this.letNews=res;
    },err=>
    
  {
    console.log(err)
  })
  
  }
}
