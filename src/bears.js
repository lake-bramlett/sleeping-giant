export class Bear {
  constructor(name) {
    this.name = name;
    this.foodlevel = 5;
  }
  bearSleep(){
    console.log('sleepy bear: ' + this.foodlevel);
    let sleepTimer = setTimeout( ()=>{
      this.foodlevel--;
      clearInterval(sleepTimer);
      this.bearCheck();
    },15000)
  }

  bearCheck(){
    let bearTimer = setInterval( () => {
      console.log("bearcheck");
      console.log(this.foodlevel);
      if (this.foodlevel > 0 && this.foodlevel <= 9) {
        this.foodlevel--;
      } else if (this.foodlevel >= 10) {
        this.bearSleep();
        clearInterval(bearTimer);
      } else if (this.foodlevel === 0) {
        alert('You dun got eaten by a bear!')
        clearInterval(bearTimer);
      }


    }, 1000);
  }

  feedBear() {
    this.foodlevel ++;
    console.log('food level: ' + this.foodlevel);
  }

}


export const olGrizz = new Bear ("Ol Grizz");
