// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

//this function will check what price the user will have to pay to go to the museum of chaos theory.
function museumPriceClicked() {
  //input, declaring and initializing the variables. 
  let userAge = document.getElementById('user-age').value;
  let userDayOfWeek = document.getElementById('day').value; 
  //calculation, checking if the user age and day of week allows the user to qualify for any special discounts. 
  if (userAge < 5 || userAge > 95) {
    document.getElementById('museum-price').innerHTML = 'Admission is free!';
  }
  else if (userAge >= 12 && userAge <= 21 || userDayOfWeek == 'tues' || userDayOfWeek == 'thurs') {
    document.getElementById('museum-price').innerHTML = 'You receive the student discount!';
  }
  else {
    document.getElementById('museum-price').innerHTML = 'You pay the regular price.';
  }
}