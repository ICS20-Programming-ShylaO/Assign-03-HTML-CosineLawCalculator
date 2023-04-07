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
  let cosC = parseFloat(document.getElementById('angle-c').value) * Math.cos (1);
  
  // process
  let side-c-sqrd = sideA ** 2 + sideB ** 2 - 2 * sideA * sideB * cosC;
  let side-c-ans = Math.sqrt(side-c-sqrd);

  // output
  document.getElementById('side-c-ans').innerHTML = "Side c is about" + side-c-ans.toFixed(2) + " cm." 
}
