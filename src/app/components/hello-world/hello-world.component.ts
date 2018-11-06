import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"]
})
export class HelloWorldComponent implements OnInit {
  public name: string = "Angular";
  public status:boolean = false;
  public imgUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  constructor() {}

  ngOnInit() {}
}
