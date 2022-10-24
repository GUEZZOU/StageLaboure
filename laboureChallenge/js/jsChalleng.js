// *********l'heure et date*********************
let displayTime = document.querySelector('.display-time')
let displayDate = document.querySelector('.display-date')
let displayDay = document.querySelector('.display-day')
let colorArray = [ 'rgb(255,255,255)']

let i = 0

const myDate = () => {
    if (i === colorArray.length) {
        i = 0;
    }
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let dateNumber = date.getDate()
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let mapDay = new Map()

    mapDay.set(0, 'Samedi')
    mapDay.set(1, 'Lundi')
    mapDay.set(2, 'Mardi')
    mapDay.set(3, 'Mercredi')
    mapDay.set(4, 'Jeudi')
    mapDay.set(5, 'Venderdi')
    mapDay.set(6, 'Dimenche')



    let dayName = mapDay.get(day);
    displayTime.innerHTML = `${hours}:${minutes}:${seconds}`
    displayDate.innerHTML = `${dayName},${dateNumber}-${month}-${year}`
    displayTime.style.color = colorArray[i];
    displayDate.style.color = colorArray[i];
    i++
}
setInterval(myDate, 1000);
setInterval(myDate, 1000);

// ****************progressbar*****************************
var progressVal = $('progress').val(),
    progressStep = 20,
    progressDirection = 1;

setInterval(function() {
  console.log(progressDirection, progressVal);
  
  if (progressDirection > 0 && progressVal < 100) {
    progressVal += progressStep;
    $('progress').val(progressVal);
  } else if (progressDirection < 0 && progressVal > 0) {
  progressVal -= progressStep;
 $('progress').val(progressVal);
 } else if (progressVal == 100) {
   progressDirection = -1;
  } else if (progressVal == 0) {
    progressDirection = 1;
  }
}, 3000)

// *********************************************
$(document).ready(function () {
    var clube = $('ul#filtro li a#clube');
});