"use strict"
let userName;
let userCountry;
alert("Hello!");
userName = prompt("What is your name?",'Noman');
userCountry = prompt("Where are you from, " + userName + "?","Everywere");
alert("Nice to meet you," + userName + "! You are from  " + userCountry + "!");
document.getElementById('display').textContent = "Nice to meet you, " + userName + "! You are from " + userCountry + "!";