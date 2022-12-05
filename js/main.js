var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elInput2 = document.querySelector('.js-input1');
var elbtn1 = document.querySelector('.js-button1');
var elbtn2 = document.querySelector('.js-button2');


var elRezult = document.querySelector('.js-rezult');




var array = [' Chevrolet',' BMV',' TOYOTA',' KIY '];



elRezult.textContent = array

function  chek(evt)
{ evt.preventDefault();
    

    array.unshift(elInput.value)
    array.push(elInput2.value);

    elRezult.textContent = array;
    elInput.value = " ";
    elInput2.value = " "
    return
};
// --------------------------------------------------
function renove(){
    array.shift()

    elRezult.textContent = array;
return
}
// --------------------------------------------------
function sinimat(){
    array.pop()

    elRezult.textContent = array;
return
}
// ------------------------------------------------------
elForm.addEventListener('submit',chek );
// -------------------------------------------------
elbtn1.addEventListener("click",renove)
// -------------------------------------------------
elbtn2.addEventListener("click",sinimat)
    

