let superCar = {
  HorsePower: 320,
  Brand: 'Honda',
  Model: 'Civic',
  year : 2018,
}

let superCar2 = {};

function createCopy (newObj, obj) {

  for (let key in obj) {
      newObj[key] = obj[key];
  }
  return console.log(newObj);
}

createCopy (superCar2, superCar);



function strSum (obj) {

  let res = 0;

  for (let key in obj) {
      if (typeof obj[key] === 'string') res++; 
  }
  return res;
}

strSum(superCar);