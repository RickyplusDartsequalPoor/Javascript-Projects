<<<<<<< HEAD
function clock () {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  elif (mins < 10) {
    mins = "0" + mins;
  }
  elif (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ":" + mins;
  document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock, 100)
=======
const fullDate = new Date();
const hours = fullDate.getHours();
const mins = fullDate.getMinutes();
const secs = fullDate.getSeconds();

document.getElementByID('hour').innerHTML = hours;
document.getElementByID('minute').innerHTML = mins;
document.getElementByID('second').innerHTML = secs;
>>>>>>> 162350b19add39cf3a37e421feb0f29c5250706e
