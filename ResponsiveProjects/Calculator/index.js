let num1=8;
let num2=8;
// TODO: MAKE THIS CODE CLEANER BY USING SWITCH OR SOME THING LIKE THAT  GIVE OPERATION LIKE AN ARGUMENT THEN ACTIVE THE FUNCTION OF THAT ARGU 
document.getElementById('numEl1').textContent=num1;
document.getElementById('numEl2').textContent=num2;
let result;


function add(){
    document.getElementById('result').textContent= 'result Is : ';

    result= num1+num2
    document.getElementById('result').textContent+= Number(result);
}



function sub(){
    // document.getElementById('result').textContent+= result;
    document.getElementById('result').textContent= 'result Is : ';

    result= num1-num2
    document.getElementById('result').textContent+= result;
}


function mul(){
    document.getElementById('result').textContent= 'result Is : ';

    result= num1*num2
    document.getElementById('result').textContent+= Number(result);
}


function div(){
    document.getElementById('result').textContent= 'result Is : ';

    result= num1/num2
    document.getElementById('result').textContent+= Number(result);
}