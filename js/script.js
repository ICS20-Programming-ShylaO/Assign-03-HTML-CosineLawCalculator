// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function uses cosine law to solve for side c.
 */
function calculateSideC () {
  // input
  let sideA = parseFloat(document.getElementById('side-a').value);
  let sideB = parseFloat(document.getElementById('side-b').value);
  let angleC = parseFloat(document.getElementById('angle-c').value);
  
  // process
  let sideCAns = Math.sqrt(Math.pow (sideA, 2) + Math.pow (sideB, 2) * -2 * sideA * sideB * Math.cos (angleC))

  // output
  document.getElementById('side-c-ans').innerHTML = "Side c is about " + sideCAns.toFixed(2) + " cm." 
}

function calculateAngleC () {
  // input
  let sideAAng = parseFloat(document.getElementById('side-a-ang').value);
  let sideBAng = parseFloat(document.getElementById('side-b-ang').value);
  let sideC = parseFloat(document.getElementById('side-c').value);

  //process
  let AngleCAns = ((sideAAng ** 2 + sideBAng ** 2 - sideC ** 2)/2 * sideAAng * sideBAng)/Math.cos(1);

  //output
  document.getElementById('angle-c-ans').innerHTML = "Angle C is about " + AngleCAns.toFixed(2) + " °."
}
