function getPin(){
    const pin = Math.floor(Math.random() * 10000) + '';
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin()
    document.getElementById('display-pins').value = pin;
})


document.getElementById('calc-keys').addEventListener('click', function(event){
    const typedPin = event.target.innerText;
    const typedPins = document.getElementById('typed-pins')
    const prevTypedPins = typedPins.value
    if(isNaN(typedPin)){
        if(typedPin === 'C'){
            typedPins.value = '';
        }
        else if(typedPin === '<'){
            typedPins.value = prevTypedPins.slice(0, -1);
        }
    }
    else{
        const newTypedPins = prevTypedPins + typedPin;
        typedPins.value = newTypedPins;
    }
})


function getPinValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    return elementValue;
}

document.getElementById('btn-submit').addEventListener('click', function(){
    const typedPins = getPinValue('typed-pins');
    const displayPins = getPinValue('display-pins');
    if(typedPins === displayPins){
        document.getElementById('success-message').style.display = 'block'
        document.getElementById('failure-message').style.display = 'none'
    }
    else{
        document.getElementById('success-message').style.display = 'none'
        document.getElementById('failure-message').style.display = 'block'
    }
})
