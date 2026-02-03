let myScore=81;
let friendScore=82;

if(myScore>80){
  if(friendScore>80){
    console.log(`We are very 😊 and go for a lunch`);
  }else{
    if(friendScore>=60){
      console.log(`Say, my friend good luck for next time`);
    }else{
      if(friendScore>=40){
        console.log(`Message unseen`);
      }else{
        console.log(`Block Your Friend`);
      }
    }
  }
}else{
  console.log(`My score is ${myScore} and I am so 😥`);
}