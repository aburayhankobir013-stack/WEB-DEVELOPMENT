// BMI CALCULATOR
let weight=55;
let heightInFoot=5.2;
let footToMeter=heightInFoot*0.3048;
let bmi=Number((weight/(footToMeter*footToMeter)).toFixed(2));

if(bmi<18.5){
  console.log(`Your BMI is ${bmi} and your are in underweight`);
}else if(bmi>=18.5){
  if(bmi<=24.9){
    console.log(`Your BMI is ${bmi} and you are in normal weight`);
  }else if(bmi>=25){
    if(bmi<=29.9){
      console.log(`Your BMI is ${bmi} and you are in overweight`);
    }
  }else{
    console.log(`Your BMI is ${bmi} and you are in obese`);
  }
}
