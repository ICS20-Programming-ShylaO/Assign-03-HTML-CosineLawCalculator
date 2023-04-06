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
  let cosC = parseFloat(document.getElementById('side-c').value) * Math.cos;
  
  // process
  let side = (fahrenheit - 32) * 5.0/9.0;

  // output
  document.getElementById('celsius').innerHTML = "A temperature of " + fahrenheit + " °F is " + celsius.toFixed(1) + " °C."
}
