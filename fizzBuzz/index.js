// your code here
'use strict';

function fizzBuzz(num){
    if(num % 15 === 0) return 'fizzbuzz'
    if(num % 3 === 0) return 'fizz'
    if(num % 5 === 0) return 'buzz'
    else return num;

}

function fizzBuzzArr(count){
    let arr = [];
    for(let i = 1; i <= count; i++){
        arr.push(fizzBuzz(i))
    }
    return arr;
}


function htmlMap(array){

        if(array === "fizz"){
            return '<div class="fizz-buzz-item fizz"> <span>fizz</span> </div>';
        }
        if(array === "buzz"){
            return '<div class="fizz-buzz-item buzz"> <span>buzz</span> </div>';
        }
        if(array === "fizzBuzz"){
            return '<div class="fizz-buzz-item fizzbuzz"> <span>fizzbuzz</span> </div>';
        }
        if(typeof(array === 'number')){
            return `<div class="fizz-buzz-item "> <span> ${array} </span> </div>`;
        }
    }


$('form').on('submit', function(){
    event.preventDefault();
    console.log('listener running');
    //let countnum = $( 'input , #number-choice').val
    const countnum = parseInt( $(this).find( 'input[name="number-choice"]').val());
    console.log(countnum);
    let testArr = fizzBuzzArr(countnum);
    let htmlArr = testArr.map(htmlMap)
    console.log(htmlArr)
    $( ".js-results" ).append( htmlArr );
})



