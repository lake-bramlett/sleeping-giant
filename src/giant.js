export class Giant {
  constructor(name) {
    this.name = name;
    this.foodlevel = 5;
  }

  giantSleep(){
    this.foodlevel = 10;
    console.log('sleepy giant: ' + this.foodlevel);
    let sleepTimer = setTimeout( ()=>{
      this.foodlevel--;
      this.giantCheck();
      clearInterval(sleepTimer);
    }, 5000)
  }

  giantCheck(){
    let giantTimer = setInterval( () => {
      console.log("giantcheck");
      console.log(this.foodlevel);
      if (this.foodlevel > 0 && this.foodlevel <= 9) {
        this.foodlevel--;
      } else if (this.foodlevel >= 10) {
        this.giantSleep();
        clearInterval(giantTimer);
      } else if (this.foodlevel === 0) {
        alert('You dun got eaten by a giant!')
        clearInterval(giantTimer);
      }


    }, 1000);
  }

  feedGiant() {
    if(this.foodlevel < 10){
      this.foodlevel ++;
      console.log('food level: ' + this.foodlevel);
    }
  }


}

////////////////// Player Logic

export class Player{
  constructor(name){
      this.name = name;
      this.points = 0;
      this.turn = false;
      this.turnID = 1;
      // this.potions = 0;
  }

  // addPotion(){
  //   this.potions++;
  // }
  //
  // usePotion(){
  //   this.potions--;
  // }

////////////////// Treasure Logic

}

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

  treasureContents(){

    // let potionChestID = Math.floor( Math.random() *  Math.floor(this.contents.length) );
    for (let i = 0; i < 9; i++) {
      let newChest = new TreasureChest(i);
      this.contents.push(newChest);
    }
    let dangerChestID = Math.floor(Math.random() *(this.contents.length));
    console.log(dangerChestID);
    this.contents[dangerChestID].trap = true;
    this.contents[dangerChestID].gold = 0;
  }
}

export const player1 = new Player ("Player 1");
export const player2 = new Player ("Player 2");

export const olGrizz = new Giant ("Ol Grizz");
export const giantsKeep = new GiantsKeep();
giantsKeep.treasureContents();
console.log(giantsKeep);
