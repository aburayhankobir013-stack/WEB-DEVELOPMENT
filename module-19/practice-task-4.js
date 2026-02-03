
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phonesCollection){
  let total=0;
  let average;
  if(Array.isArray(phonesCollection)){
    for(const phone of phones){
      total+=phone.price;
    }
  }else{
    console.log('Please pass the parameter as array!');
  }
  average=total/phonesCollection.length;
  return average;
}

const averageValue=findAveragePhonePrice(phones);
console.log('The average price is: ', Math.round(averageValue));