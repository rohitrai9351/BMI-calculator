document.querySelector('.calculate').addEventListener('click' , () => {
    BMICalculator();
})
function BMICalculator(){
    const heightButton = document.querySelector('.js-height');
    const weightButton = document.querySelector('.js-weight');
    let heightValue = Number(heightButton.value);
    let weightValue = Number(weightButton.value);
    console.log(heightValue);
    console.log(weightValue)
    let BMI = (weightValue/(heightValue*heightValue)).toFixed(2)
    if(BMI < 18.6){
        document.querySelector('.js-bmi').innerHTML = `Your BMI is ${BMI}`;
        document.querySelector('.range').innerHTML = 'You are under Weight'

    }
    else if(BMI >= 18.6 && BMI < 25){
        document.querySelector('.js-bmi').innerHTML = `Your BMI is ${BMI}`;
        document.querySelector('.range').innerHTML = 'You are in Normal range'

    }
    else if(BMI >= 25 && BMI < 29.9){
        document.querySelector('.js-bmi').innerHTML = `Your BMI is ${BMI}`;
        document.querySelector('.range').innerHTML = 'You are in overweight range'

    }
    else{
        
            document.querySelector('.js-bmi').innerHTML = `Your BMI is ${BMI}`;
            document.querySelector('.range').innerHTML = 'You are in OBESE range'
    
        }
    
    //console.log(BMI )
    
    heightButton.value = '';
    weightButton.value = '';

}
