// Copyright (c) 2024 Clara Tyman  All rights reserved
//
// Created by: Clara Tyman
// Created on: March 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates area of a trapzoid

  const params = new URLSearchParams(document.location.search)


  // input
  const base1 = parseFloat(params.get('base1'))
  console.log(base1)
  const base2 = parseFloat(params.get('base2'))
  console.log(base2)
  const height = parseFloat(params.get('height'))
  console.log(height)

  // process
  const area = ((base1 + base2) / 2) * height
  const dimensions =
    "<ul>\n<li>base1 = " +
    base1 +
    "</li>\n<li>base2 = " +
    base2 +
    "</li>\n<li>height = " +
    height +
    "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}