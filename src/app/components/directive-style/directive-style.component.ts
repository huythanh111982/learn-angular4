import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-style',
  templateUrl: './directive-style.component.html',
  styleUrls: ['./directive-style.component.css']
})
export class DirectiveStyleComponent implements OnInit {
  public currentStyle ={'color': 'red','background': 'orange'};
  public isHighlight:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isHighlight =! this.isHighlight;
  }
}
