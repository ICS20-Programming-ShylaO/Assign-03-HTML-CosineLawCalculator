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
  // get side a, b, and angle C
  let sideA = parseFloat(document.getElementById('side-a').value);
  let sideB = parseFloat(document.getElementById('side-b').value);
  let angleCDeg = parseFloat(document.getElementById('angle-c').value);
  let angleCRad = (angleCDeg * Math.PI / 180);
  
  
  let sideCAns = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - (2 * sideA * sideB * Math.cos(angleCRad)));

  // display to user
  document.getElementById('side-c-ans').innerHTML = "Side c is about " + sideCAns.toFixed(2) + " cm." 
}

function calculateAngleC () {
  // get sides a, b, and c
  let sideA = parseFloat(document.getElementById('side-a-2').value);
  let sideB = parseFloat(document.getElementById('side-b-2').value);
  let sideC = parseFloat(document.getElementById('side-c').value);

  //solve for angle C
  let angleCRad = Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2)/(2 * sideA * sideB));
  let angleCAns = (angleCRad * Math.PI / 180);

  //display to user
  document.getElementById('angle-c-ans').innerHTML = "Angle C is about " + angleCAns.toFixed(2) + "°."
}
