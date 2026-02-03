// HEIGHTEST NUMBERS FOUND
const numbers=[167, 190, 120, 165, 137];
function heighestNumber(numberCollection){
  if(Array.isArray(numberCollection)){
    return Math.max(...numberCollection);
  }else{
    console.log('Please enter numbers as array!');
  }
}
const heighestValue=heighestNumber(1,2,4);
console.log(`The heightest value is: ${heighestValue}`);