import {Giant, olGrizz, giantsKeep, TreasureChest, Player, player1, player2, PlayerRoster, gameRoster} from './giant.js';

////////////////// Player Logic








export function gameTurn (){
    olGrizz.giantCheck();

}

export function openChest(chestID) {
  if(giantsKeep.contents[chestID].trap === true) {
    console.log('KABOOM!');
    olGrizz.sleepLevel-= 5;
    console.log(`Sleep Level : ${olGrizz.sleepLevel}`)
  } else {
    gameRoster.roster[gameRoster.currentTurnID].roundGold += giantsKeep.contents[chestID].gold;
    console.log(`player gold:${gameRoster.roster[gameRoster.currentTurnID].roundGold}`);
  }
}
