let timeInHours, timeInSeconds;

timeInHours = Number(prompt("Hi! To convert to seconds, enter the time in hours.",'0'));
timeInSeconds = 3600 * timeInHours;

alert(`${timeInHours} hours is ${timeInSeconds} seconds`);
console.log(`${timeInHours} hours is ${timeInSeconds} seconds`);
document.getElementById('display1').innerText = `${timeInHours} hours is ${timeInSeconds} seconds`;


