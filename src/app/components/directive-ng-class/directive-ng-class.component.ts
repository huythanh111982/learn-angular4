import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.css']
})
export class DirectiveNgClassComponent implements OnInit {
  public isClass:boolean =true;
  constructor() { }
  ngOnInit() {
  }
  onClick(){
    this.isClass = !this.isClass;
  }
}
