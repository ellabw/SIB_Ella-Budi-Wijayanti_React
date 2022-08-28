// Destructuring Object
const user = {};
user.name = "Ella Budi Wijayanti";
user.handle = "ellaabw@gmail.com";
user.location = "Demak, Jawa Tengah";

// extraction
const name = user.name;
const handle = user.handle;
const location = user.location;
console.log(name, handle, location);

//object literals
const mhs = {
  userName: "Ella Budi",
  userEmail: "ellabudi@gmail.com",
  userLocation: "Demak, Jawa Tengah",
};
const { userName, userEmail, userLocation } = mhs;
console.log(userName, userEmail, userLocation);


// Destructuring Function Result
const getUser = () => {
  return {
    namaUser: "asrifah",
    emailUser: "asrifah@gmail.com",
    alamatUser: "Kudus, Jawa Tengah",
  };
};
// Extraction
const { namaUser, emailUser, alamatUser } = getUser();
console.log(namaUser, emailUser, alamatUser)


//Destructuring Array
const csv = "2002,Ford,F350,Must Sell!";
const [year, make, model, description] = csv.split(",");


// Aliasing Object Properties
const user1 = {
  n: "Ella Budi Wijayanti",
  h: "ellaabw@gmail.com",
  l: "Demak, Jawa Tengah`",
};
// Extraction
const { n: nama, h: andle, l: lokasi } = user1;
console.log(nama, handle, lokasi);


// This
function changeColor() {
  this.document.body.style.backgroundColor = "#bada55a";
}

// Function Declaration
function add(a, b) {
  return a + b;
};

// function Expression
const add2 = function (a, b) {
  return a + b;
};

// Arrow Function
const add3 = (a, b) => {
  return a + b;
};

// Implict Return
const add4 = (a, b) => a + b;
const square = (x) => x * x;
const three = () => 3;

const add5 = (a, b) => {
  const temp = a + b;
  return temp;
};
console.log(add5(5, 2));

// Manajemen This Keyboard

// function person() {
//   this.age = 0;

//   setInterval(
//     function () {
//       this.age++;
//       console.log(this.age);
//     }.bind(this),
//     1000
//   );
// }

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}
const p = new Person();

// Higher-Order Function
const printTrick = () => {
  console.log("Tick");
};
setInterval(printTrick, 1000);

//filter
const animals = [
  { name: "Fluffy", species: "cat" },
  { name: "Carlo", species: "dog" },
  { name: "Nemo", species: "fish" },
  { name: "Hamilton", species: "dog" },
  { name: "Dory", species: "fish" },
  { name: "Ursa", species: "cat" }
];

let fish = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === "fish") {
      fish.push(animals[i]);
  }
}

console.log(fish);

fish = animals.filter((animal) => animal.species === "fish");

console.log(fish);


//filter
let names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}

console.log(names);

names = animals.map((animal) => animal.name);

console.log(names);

names = animals.map((animal) => animal.name + " is a " + animal.species);

console.log(names);


//reduce
let orders = [
  { total: 325 },
  { total: 512 },
  { total: 128 },
  { total: 32 }
];

let total = 0;
for (let i = 0; i < orders.length; i++) {
  total = total + orders[i].total;
}
console.log(total);

total = orders.reduce((total, order) => total + order.total, 0);
console.log(total);