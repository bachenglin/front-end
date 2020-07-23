import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template:
  `
  
  `
  
  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "John"
  public myId = "testId"
  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
