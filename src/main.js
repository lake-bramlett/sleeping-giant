import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import {Bear, olGrizz} from './bears.js';


let fangs = new Bear ("Fangs");

console.log(olGrizz);
console.log(fangs);


$(document).ready(function() {
  $('.bear button').click(function() {
    console.log('fed the bear');
    olGrizz.feedBear();
  })

  $('.start button').click(function() {
    console.log('bears start hungry');
    olGrizz.bearCheck();
  })



});
