let passangerAge=21;
let isStudent=false;
let basePrice=800;

if(passangerAge<10){
  console.log(`Your age is ${passangerAge} so you are child and you are free`);
}else{
  if(isStudent){
    let studentDiscount=800-(800*50/100);
    console.log(`You are a student, so you have 50% discount ${studentDiscount} and now your ticket price is ${800-studentDiscount}`);
  }else{
    if(passangerAge>=60){
      let seniorDiscount=800-(800*15/100);
      console.log(`Your age is ${passangerAge} and you are a senior citizens so you have 15% discount ${seniorDiscount} and you ticket price is ${800-seniorDiscount}`);
    }else{
      console.log(`You are a regular passanger and your ticket price is ${basePrice}`);
    }
  }
}