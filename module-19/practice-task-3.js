
function calculateElectronicsBudget(laptops,tablets,mobiles){
  const laptop=35000;
  const tablet=15000;
  const mobile=20000;
  return ((laptop*laptops)+(tablet*tablets)+(mobile*mobiles));
}

const totalBudget=calculateElectronicsBudget(1,1,1);
console.log(totalBudget);