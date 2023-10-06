import { Component } from '@angular/core';


interface Dice{
  value: number
  image: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diceImages: Dice[] = []
  total: number = 0;

  constructor() {
    this.rollDice();
  }
  rollDice(){
    this.diceImages = []
    this.total=0;

    for(let i=0;i<3;i++){
      const diceValue = this.getRandomDiceValue()
      const diceImage = `assets/dice/side${diceValue}.png`
      this.diceImages.push({value:diceValue, image: diceImage})
      this.total += diceValue
    }
  }

  getRandomDiceValue(): number{
    return Math.floor(Math.random()*6)+1
  }
}
