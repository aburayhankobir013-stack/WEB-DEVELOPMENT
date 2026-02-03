
const friends=['rahim', 'robin', 'rafi', 'ron', 'ron'];

function smallestName(nameCollection){
  if(Array.isArray(nameCollection)){
    let maxLength=Infinity;
    let smallName;
    for(const name of nameCollection){
      if(maxLength>name.length){
        maxLength=name.length;
        smallName=name;
      }
    }
    return smallName;
  }else{
    console.log('Please pass the names as array!');
  }
}
const smallName=smallestName(friends);
console.log(smallName);