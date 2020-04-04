

function  calCulateWightInLbs(kgs)
{
    return kgs*2.2;

}

function main()
{

    //fetching an element from the DOM
    const button = document.querySelector("#calWeightButton");


    //Make the button an event listener, specifically listening to a click event
    button.addEventListener("click",function(){

        /*Method 1: */
        const txtWeight = document.querySelector("#personWeight");
        const txtName = document.querySelector("#personName");
      

        const weightInLbs = calCulateWightInLbs(parseFloat(txtWeight.value))
    
        const  output = document.querySelector("#output");
        output.innerHTML=`${txtName.value} your weight in lbs is ${weightInLbs.toFixed(2)}`
        
        txtWeight.value  = "";
        txtName.value = "";
        txtName.focus();
        
    });

    

}


main();


