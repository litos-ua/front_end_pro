let name;
let country;
alert("Hello!");
name = prompt("What is your name?",'Noman');
country = prompt("Where are you from, " + name + "?","Everywere");
alert("Nice to meet you," + name + "! You are from  " + country + "!");
document.getElementById('display').textContent = "Nice to meet you, " + name + "! You are from " + country + "!";