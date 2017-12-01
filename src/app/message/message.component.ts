import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-ui',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // stores the value of the name and messsage input through "ngModel"
  theUser: any = {};

  constructor() { }

  ngOnInit() {
  }

  isClean() {
    if(this.theUser.message === undefined) {
      return false;
    }

    let messageIsGood = true;

    if  (this.theUser.message.includes("SHIT") ||
        this.theUser.message.includes("shit") ||
        this.theUser.message.includes("COCKSUCKER") ||
        this.theUser.message.includes("cocksucker") ||
        this.theUser.message.includes("TITS") ||
        this.theUser.message.includes("MOTHERFUCKER") ||
        this.theUser.message.includes("motherfucker") ||
        this.theUser.message.includes("tits") ||
        this.theUser.message.includes("BITCH") ||
        this.theUser.message.includes("bitch") ||
        this.theUser.message.includes("PISS") ||
        this.theUser.message.includes("piss") ||
        this.theUser.message.includes("FUCK") ||
        this.theUser.message.includes("fuck")) {
      messageIsGood = false;
    }

    return messageIsGood;

  }

}
