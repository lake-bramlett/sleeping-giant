import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import {Giant, olGrizz, giantsKeep, TreasureChest, Player, player1, player2, PlayerRoster, gameRoster} from './giant.js';
import {openChest, gameTurn} from './gameplay.js';


let fangs = new Giant ("Fangs");

console.log(olGrizz);
console.log(fangs);


/// UI LOGIC

function appendTreasureChest(chestID) {
  console.log('appendTreasureChest starting');
  console.log(chestID);
  $('div.giants-keep div.card-wrapper').append(`<div class="treasure-card"><button type="button" name="button" class="chest-button${chestID}">open</button></div>`);
  $(`.giants-keep .card-wrapper .chest-button${chestID}`).click(function() {
      console.log(`Chest ${chestID} was clicked!`);
      openChest(chestID);

    })
}

function populateChests (keepArray){
  for (let i = 0; i < keepArray.contents.length; i++) {
    console.log("populateChests starting");
    console.log(keepArray);
      appendTreasureChest(keepArray.contents[i].chestID);
  }
}


export function updateGiantStatus(object){
      $(".giant-status").text(object.sleepLevel);
}




$(document).ready(function() {
  populateChests(giantsKeep);
  console.log("giantsKeep is below");
  console.log(giantsKeep);

  $('.giant button').click(function() {
    console.log('fed the giant');
    olGrizz.feedGiant();
  })

  $('.start button').click(function() {
    console.log('giants start hungry');
    gameRoster.roster[0].myTurn = true;
    gameTurn();
  })


    $(".treasure-card button").click(function(){
      console.log("opening a chest");


    })


});
