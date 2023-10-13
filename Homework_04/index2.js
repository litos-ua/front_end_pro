'use strict'
const distKMeters = Number(prompt("Enter the distance in kilometers.",'5'));
const distFeet = Number(prompt("Enter the distance in feet.","3000"));
const convFeetToKMeters = distFeet*.000305;
if (distKMeters>convFeetToKMeters){
    console.log(`distance in kilometers (${distKMeters} km) > distance in feet (${distFeet} f)`);
    document.getElementById('display2').innerText = `distance in kilometers (${distKMeters} km) > distance in feet (${distFeet} f)`;
}else {
    if(distKMeters===convFeetToKMeters){
        console.log(`distance in kilometers (${distKMeters} km) = distance in feet (${distFeet} f)`);
        document.getElementById('display2').innerText = `distance in kilometers (${distKMeters} km) = distance in feet (${distFeet} f)`;
    }else {
        console.log(`distance in feet (${distFeet} f) > distance in kilometers (${distKMeters} km)`)
        document.getElementById('display2').innerText = `distance in feet (${distFeet} f) > distance in kilometers (${distKMeters} km)`
    }
}
