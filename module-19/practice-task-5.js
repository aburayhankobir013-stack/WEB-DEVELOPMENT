
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employeeCollection){
  if(Array.isArray(employeeCollection)){
    for(const employee of employeeCollection){
      console.log(`The toral salary of ${employee.name} with experience ${employee.experience} is: ${(employee.experience*employee.increment)+(employee.starting)}`);
    }
  }else{
    console.log('Please pass the parameter as array!');
  }
  return;
}
totalSalary(employees);
