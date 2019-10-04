import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  resData: any;
  letNews: any;

  ngOnInit() {
    this.letNewss();
  }
  letNewss()
  {
    let url="https://jsonplaceholder.typicode.com/users";
    // console.log("url***",url);
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res)
      this.resData=res;
      //this.letNews=this.resData.articles;
      // use above line for object data
      this.letNews=res;
    },err=>
    
  {
    console.log(err)
  })
  
  }
}
