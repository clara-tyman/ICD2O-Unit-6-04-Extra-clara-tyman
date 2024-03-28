// Copyright (c) 2024 Clara Tyman  All rights reserved
//
// Created by: Clara Tyman
// Created on: March 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const base1 = parseInt(document.getElementById("base-of-trapezoid-a").value)
  const base2 = parseInt(document.getElementById("base-of-trapezoid-b").value)
  const height = parseInt(document.getElementById("height-of-trapezoid").value)
  // process
  const area = ((base1 + base2) * height) / 2

  // output
  document.getElementById("Area-of-a-Trapezoid").innerHTML = area.toFixed(2) + " cm²"

}