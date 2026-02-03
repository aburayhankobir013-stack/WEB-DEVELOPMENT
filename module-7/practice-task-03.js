// GRADE CALCULATOR
let mark=72.5;
if(mark<=100){
  if(mark>=90){
    console.log(`Your mark is ${mark} and your position in grade A`);
  }else{
    if(mark<=89){
      if(mark>=80){
        console.log(`Your mark is ${mark} and your position in grade B`);
      }else{
        if(mark<=79){
          if(mark>=70){
            console.log(`Your mark is ${mark} and your position in grade C`);
          }else{
            if(mark<=69){
              if(mark>=60){
                console.log(`Your mark is ${mark} and your position in grade D`);
              }else{
                if(mark<=59){
                  if(mark>=0){
                    console.log(`Your mark is${mark} and your position in grade F`);
                  }else{
                    console.log(`Invalid Mark!`);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}