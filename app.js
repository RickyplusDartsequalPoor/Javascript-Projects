const fullDate = new Date();
const hours = fullDate.getHours();
const mins = fullDate.getMinutes();
const secs = fullDate.getSeconds();

document.getElementByID('hour').innerHTML = hours;
document.getElementByID('minute').innerHTML = mins;
document.getElementByID('second').innerHTML = secs;
