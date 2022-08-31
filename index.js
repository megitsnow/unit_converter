/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter_to_feet = 3.281
const liter_to_gallon = 0.264
const kilogram = 2.204

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("convert-btn")
// const lengthConversion = document.getElementById("length-conversion")
console.log(inputEl)


function modify_text(){
    input_value = document.getElementById("input-el").value
    const lengthConversion = document.getElementById("length-conversion").innerText = 
    `${input_value} meters = ${(input_value*meter_to_feet).toFixed(4)} feet | ${input_value} feet = ${(input_value/meter_to_feet).toFixed(4)} meters` 
    
    const volumeConversion = document.getElementById("volume-conversion").innerText = 
    `${input_value} gallons = ${(input_value*liter_to_gallon).toFixed(4)} liters | ${input_value} liters = ${(input_value/liter_to_gallon).toFixed(4)} gallons` 
   
    const massConversion = document.getElementById("mass-conversion").innerText = 
    `${input_value} kilograms = ${(input_value*kilogram).toFixed(4)} pounds | ${input_value} pounds = ${(input_value/kilogram).toFixed(4)} kilograms` 
    
    // input_value = ""
}






