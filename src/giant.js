
import {updateGiantStatus} from './main.js';

export class Giant {
  constructor(name) {
    this.name = name;
    this.sleepLevel = 9;
  }

  giantSleep(){
    this.sleepLevel = 10;
    console.log('sleepy giant: ' + this.sleepLevel);
    let sleepTimer = setTimeout( ()=>{
      this.sleepLevel--;
      this.giantCheck();
      clearInterval(sleepTimer);
    }, 5000)
  }

  giantCheck(){
    let giantTimer = setInterval( () => {
      console.log("giantcheck");
      console.log(this.sleepLevel);
      if (this.sleepLevel > 0 && this.sleepLevel <= 9) {
        this.sleepLevel--;
      } else if (this.sleepLevel >= 10) {
        this.giantSleep();
        clearInterval(giantTimer);
      } else if (this.sleepLevel === 0) {
        gameRoster.roster[gameRoster.currentTurnID].roundGold = 0;
        gameRoster.turnSwap();
        console.log(`player gold:${gameRoster.roster[gameRoster.currentTurnID].roundGold}`);
        clearInterval(giantTimer);
      }

      updateGiantStatus(this);

    }, 1000);
  }

  feedGiant() {
    if(this.sleepLevel < 10){
      this.sleepLevel ++;
      console.log('sleep level: ' + this.sleepLevel);
    }
  }


}

export class Player{
  constructor(name){
      this.name = name;
      this.totalGold = 0;
      this.roundGold = 0;
      this.myTurn = false;
      this.turnID = 1;
  }


}



export class PlayerRoster{
  constructor (){
    this.roster = [];
    this.currentTurnID = 0;
  }

  addPlayer(player){
    this.roster.push(player)
  }
  turnSwap () {
    if (this.currentTurnID < this.roster.length -1) {
      this.roster[this.currentTurnID].myTurn = false;
      this.roster[this.currentTurnID + 1].myTurn = true;
      olGrizz.sleepLevel = 10;
      this.currentTurnID ++;
      console.log('turn swapped');
      console.log(this.roster[this.currentTurnID]);
    } else if (this.currentTurnID === this.roster.length -1) {
      olGrizz.sleepLevel = 10;
      this.currentTurnID = 0;
      console.log(this.roster[this.currentTurnID]);
    } else {
      console.log('you skipped the step');
      console.log(this.roster);
      console.log('currentTurnID is ' + this.currentTurnID);
      console.log('current roster length ' + (this.roster.length -1));
    }
  }
}

export const player1 = new Player ("Player 1");
export const player2 = new Player ("Player 2");
export const gameRoster = new PlayerRoster();
gameRoster.addPlayer(player1);
gameRoster.addPlayer(player2);
console.log(gameRoster)


////////////////// Treasure Logic




export class TreasureChest{
  constructor (chestID){
    this.gold = 100;
    // this.potion = false;
    this.trap = false;
    this.chestID = chestID;
  }
}

export class GiantsKeep {
  constructor(){
    this.contents = [];
  }

  addTreasure(treasure){
    this.contents.push(treasure);
  }

  treasureContents(turnCount){

    // let potionChestID = Math.floor( Math.random() *  Math.floor(this.contents.length) );
    for (let i = 0; i < (turnCount*3); i++) {
      let newChest = new TreasureChest(i);
      this.contents.push(newChest);
    }
    let dangerChestID = Math.floor(Math.random() *(this.contents.length));
    console.log(dangerChestID);
    this.contents[dangerChestID].trap = true;
    this.contents[dangerChestID].gold = 0;
  }
}



export const olGrizz = new Giant ("Ol Grizz");
export const giantsKeep = new GiantsKeep();
giantsKeep.treasureContents(player1.turnID);
console.log(giantsKeep);
