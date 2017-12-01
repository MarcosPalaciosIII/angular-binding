import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-select-widget',
  templateUrl: './food-select.component.html',
  styleUrls: ['./food-select.component.css']
})
export class FoodSelectComponent implements OnInit {

  mySelection: string;
  selectFeedback: string;

  constructor() { }

  ngOnInit() {
  }

  updateFeedback() {
    if (this.mySelection === "mondogo") {
      this.selectFeedback = "You nasty!"
      // You Nasty!
    }
    else if (this.mySelection === "pizza") {
      this.selectFeedback = "My buddy!!"
      // My buddy!
    }
    else if (this.mySelection === "tapioca") {
      this.selectFeedback = "Booooooring."
      // Booooooring.
    }
    else {
      this.selectFeedback = "Your selection was fine."
      // Your selection was fine.
    }
  }

}
