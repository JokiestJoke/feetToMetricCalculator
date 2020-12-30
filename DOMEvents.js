class Calculator {
    constructor(measurement){
        this._measurement = measurement;  
        this._meter = 0.3048;
        this._centimeter = 30.48;
        this._kilometer = 3280.8;
        this._millimeter = 304.8;

    }

    get measurement(){
        return this._measurement;
    }

    set measurment(newMeasurement){
        if (newMeasurement != '' && typeof(newMeasurement) === 'number'){
            return this._measurement = newMeasurement;
        } else {
            console.log("This Field Must be filled")
        }
    }

    convertToMeter(){
        return this._measurement * this._meter;
           
    }

    convertToCentimer(){
        return this._measurement * this._centimeter;
    }

    convertToKilometer(){
        return this._measurement / this._kilometer;
        
    }

    convertToMillimeter(){
        return this._measurement * this._millimeter;
    }

};


const calcButton = document.getElementById('calcButton');

const meter = document.getElementById('meter');
const kilometer = document.getElementById('kilometer');
const centimeter = document.getElementById('centimeter');
const millimeter = document.getElementById('millimeter');
const dropDown = document.getElementById('dropDown');
const userInput = document.getElementById('userInput');
// const userInput = typeof(document.getElementById('userInput').value) === "number" ? document.getElementById('userInput') : alert("You must add a number");


const hoverOverText = (e) => {
    let target = e.target;
    if (target === calcButton){
        e.target.innerHTML = "Click to calculate";
        e.target.style.color = "yellow";
    } else {
        console.log('An event Handle error has occured on hoverOverText')
    }
}

const revertHoverText = (e) => {
    let target = e.target;
    if (target === calcButton){
        e.target.style.color = "white";
        e.target.innerHTML = "Calculate!";   
    } else {
        console.log('error!');
    }
}

const calculationStation = (e) => {
    let target = e.target;
    let pluralDecider = userInput.value > 1 ? "feet are" : "foot is";
    if (target === calcButton && dropDown.value === "1") {
        let feetToMeter = new Calculator(userInput.value);
        alert(`${feetToMeter.measurement} ${pluralDecider} ${feetToMeter.convertToMeter()} meters.`);
    } else if (target === calcButton && dropDown.value === "2"){
        let feetToKilometer = new Calculator(userInput.value);
        alert(`${feetToKilometer.measurement} ${pluralDecider} ${feetToKilometer.convertToKilometer()} kilometers.`);
    } else if (target === calcButton && dropDown.value === "3"){
        let feetToCentimeter = new Calculator(userInput.value);
        alert(`${feetToCentimeter.measurement} ${pluralDecider} ${feetToCentimeter.convertToCentimer()} centimeters.`);
    } else if (target === calcButton && dropDown.value === "4"){
        let feetToMillimeter = new Calculator(userInput.value);
        alert(`${feetToMillimeter.measurement} ${pluralDecider} ${feetToMillimeter.convertToMillimeter()} millimeters.`);
    } else {
        console.log("Error has occured in the calculationStation event handler");
    }

}



calcButton.addEventListener("mouseover", hoverOverText);
calcButton.addEventListener("mouseout", revertHoverText);
calcButton.addEventListener("click", calculationStation);
