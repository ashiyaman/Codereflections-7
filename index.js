//ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
const findToyotaCar = (cars) => cars.find(car => car.make.toLowerCase() === 'toyota' && car.year > 2010)
  
  const toyotaCar = findToyotaCar(cars);
  console.log(toyotaCar); 
  // Output: { make: "Toyota", model: "Camry", year: 2015 }

// ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const cars2 = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
const getCarDetails = (cars) => cars.filter(car => car.year > 2012)
  
  const getCars = getCarDetails(cars2);
  console.log(getCars);
  // Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]

//ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
    { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
];

const findElectronicsProduct = (products) => products.find(product => product.category.toLowerCase() === 'electronics')

const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct); 
// Output: { name: "iPad", price: 799, category: "electronics" }

//ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const products2 = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
    { name: "iPad", price: 799, category: "electronics" },
    {  name: "Smartwatch", price: 199, category: "electronics" },
];
  
const getAllElectronicProducts = (products) => products.filter(product => product.category.toLowerCase() === 'electronics')
  
const electronicProducts = getAllElectronicProducts(products2);
console.log(electronicProducts); 
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

//ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
  ];

const filterStudentsByGrade = (students, gradetoFilter) => students.filter(student => student.grade > gradetoFilter)
  
const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents); 
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

//ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const findBookWithMoreThan500Pages = (books) => books.find(book => book.pageCount > 500)

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages); 
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

//ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

const customers = [
  { name: 'John', age: 25, gender: 'Male' },
  { name: 'Jane', age: 30, gender: 'Female' },
  { name: 'Bob', age: 40, gender: 'Male' },
  { name: 'Alice', age: 35, gender: 'Female' },
];

const getMaleCustomers = (customers) => customers.filter(customer => customer.gender.toLowerCase() === 'male')

const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers); 
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

//ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games = [
  {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
  {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
  {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
  {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
];

const filterByGenre = (games, genreName) => games.filter(game => game.genre === genreName)

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

//ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const cars3 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = (cars) => cars.filter(car => car.year > 2012).map(car => car.model)

const carModels = getCarModel(cars3);
console.log(carModels);
// Output: ["Camry", "Mustang"]

//ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books2 = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
const getTitlesWithMoreThan700Pages = (books) => books.filter(book => book.pageCount > 700).map(book => book.title)
  
  const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books2);
  console.log(booksWithMoreThan700Pages); 
  // Output: ["The Lord of the Rings"]

//ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21] 

const sumOfEvenNumbers = (numbers) => numbers.reduce((sum, curr) => sum += curr % 2 === 0 ? curr : 0, 0)

console.log(sumOfEvenNumbers(numbers))
// Output: 18

//ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const students2 = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];
  
const getAverageScore = (students) => students.reduce((totalMarks, curr) => totalMarks + curr.score, 0) / students.length
  
  console.log(getAverageScore(students2)); 
  // Output: 82.5

//ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const products3 = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 50, quantity: 3 },
];

const getTotalCost = (products) => products.reduce((totalCost, curr) => totalCost + curr.price, 0)
  
console.log(getTotalCost(products3)); 
// Output: 150

//ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!'];

const concatenateStrings = (strings) => strings.reduce((str, curr) => str + curr)

console.log(concatenateStrings(strings)); 
// Output: "Hello world!"

//ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers3 = [10, 5, 8, 3, 6];

const getMinimumNumber = (numbers) => numbers.reduce((num, curr) => curr < num ? curr : num)

console.log(getMinimumNumber(numbers3)); 
// Output: 3
