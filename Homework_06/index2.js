'use strict'
const distMeters = Number(prompt("Enter the distance in meters.",'500'));
const distFeet = Number(prompt("Enter the distance in feet.","3000"));
const convFeetToMeters = distFeet*0.305;
if (distMeters>convFeetToMeters){
    console.log(`distance in meters (${distMeters} m) > distance in feet (${distFeet} f)`);
    document.getElementById('display2').innerText = `distance in meters (${distMeters} m) > distance in feet (${distFeet} f)`;
}else {
    if(distMeters===convFeetToMeters){
        console.log(`distance in meters (${distMeters} m) = distance in feet (${distFeet} f)`);
        document.getElementById('display2').innerText = `distance in meters (${distMeters} m) = distance in feet (${distFeet} f)`;
    }else {
        console.log(`distance in feet (${distFeet} f) > distance in meters (${distMeters} m)`)
        document.getElementById('display2').innerText = `distance in feet (${distFeet} f) > distance in meters (${distMeters} m)`
    }
}
