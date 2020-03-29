//A CALL BACK FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
/*
    WHEN YOU PASS A FUNCITON AS AN ARGUMENT TO ANOTHER FUNCTION OR METHOD()
*/
function weightHandler()
{


    /*Method 1: */
    const txtWeight = document.querySelector("#personWeight");
    const txtName = document.querySelector("#personName");
    
    const weightInLbs = parseFloat(txtWeight.value) * 2.2;
  
    const  output = document.querySelector("#output");
    output.innerHTML=`${txtName.value} your weight in lbs is ${weightInLbs.toFixed(2)}`
    
    txtWeight.value  = "";
    txtName.value = "";
    txtName.focus();

    
}



//fetching an element from the DOM
const button = document.querySelector("#calWeightButton");


//Make the button an event listener, specifically listening to a click event
button.addEventListener("click",weightHandler);


addEventListener()






/*
    Who calls the  function is actually the addEvenListener method()
*/

