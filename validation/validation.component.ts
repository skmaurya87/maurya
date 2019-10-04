import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  status: boolean = false;
  status2: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
      this.status = !this.status;       
  }
  clickEvent1(){
      this.status2 = !this.status2;       
  }
  
}
