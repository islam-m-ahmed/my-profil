/* mini calculator */
// function calc(event,formID)
// {  
//     event.preventDefault();
//     console.log(vario);  
//     var num1 = formID.querySelector(".num1").value;  
//     var num2 = formID.querySelector("#num2").value;  
//     var operator = formID.querySelector("select").value;  
//     formID.querySelector("input:disabled").value = eval(num1+operator+num2);  
//     console.log(num1,num2,operator);
// }
// var vario = document.querySelector("#mini-calculator");
// vario.addEventListener('submit', function(event){
// calc(event,calc())
// })
function calc(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var opertion = document.querySelector('select').value;
    document.getElementById('result').value =eval(num1 + opertion + num2) ;

}