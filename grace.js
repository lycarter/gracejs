/*!
 * Grace.js
 * http://lcarter.mit.edu/gracejs
 *
 * Author: Landon Carter (with significant influence/copying from Victor Hung's antoniojs script)
 * Released under the MIT license
 *
 * Date: 2015-01-01
 */

// Pardon me, I've never coded pure Javascript
// This will be interesting.

var GRACE = "1031149799101";
var BIRTHDAY = 1/1;

var img = document.createElement('img');
var loggerG = [];
var position = -2000;
var graceGo;
var activateBtn = document.getElementById('activateG');

howGreatIsShe = 4;
whichGal = Math.floor((Math.random()*howGreatIsShe)+1);
console.log(whichGal);
img.src = "thegal-" + whichGal + ".png";
img.style.height = "100%";
img.style.position = "fixed";
img.style.left = position + "px";
img.style.bottom = "0";
img.style.zIndex = 2015;

document.addEventListener('keypress', function (e) {
  console.log('sup');
  loggerG += '' + e.which;
  if (GRACE.indexOf(loggerG) != 0) {
    loggerG = "";
  } else if (GRACE === loggerG){
    console.log('Go, Grace!');
    graceGo = setInterval(moveTheGal, 24);
  }
})

if (activateBtn) {
  activateBtn.addEventListener('click', function() {
    console.log('Go, Grace!');
    graceGo = setInterval(moveTheGal, 24);
  })
}

var moveTheGal = function() {
  if (position < -1) {
    position *= BIRTHDAY/2;
  } else {
    clearInterval(graceGo);
  }
  img.style.left = position + "px";
}

document.getElementsByTagName('html')[0].appendChild(img);
