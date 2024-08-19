//------------class -------------------
// lab 1
// class Calculator {
//   constructor(start = 0) {
//     this.value = start
//   }
//   add(num) {
//     this.value += num
//     return this
//   }
//   subtract(minusNum) {
//     this.value -= minusNum
//     return this
//   }
//   multiply(mulNum) {
//     this.value *= mulNum
//     return this
//   }
//   devide(devNum) {
//     this.value /= devNum
//     return this
//   }
//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }

// let test = new Calculator(5)
// // console.log(test.add(15))
// // console.log(test.subtract(2))
// // console.log(test.multiply(2))
// test.show()

// Lab 2
// class Sale {
//   constructor(_name, _amount, _price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//  calPrice() {
//     return this.amount * this.price
//   }
// }

// class Beverage extends Sale {
//   constructor(_name, _amount, _price){
//     super(_name, _amount, _price)
//   }
// }

// let sale1 = new Sale('Coca', 50, 50)
// console.log(sale1)
// console.log(sale1.calPrice())

// let result = new Beverage('Pepsi', 3, 19)
// console.log(result.calPrice())

//----------------------------------------------
//------------------isArray------------------
// lab 1
// function isArray(input){
//   return Array.isArray(input)
// }

// let a = [1,2,3,4,5]
// let b = [{name:'dayp', age: 50},{name:'titor',age: 49}]
// let c = {name:'john'}
// console.log(isArray(a))
// console.log(isArray(b))
// console.log(isArray(c))

//-----------------------------------------

// Lab 1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let keys = Object.keys(salaries)
// console.log(keys)

// let result = keys.reduce((prev, curr) => {
//    return prev += salaries[curr]
// },0)

// console.log(result)

// let keys2 = Object.values(salaries)
// console.log(keys2)

// let result2 = keys2.reduce((prev, curr)=> {
//   return prev += curr
// }, 0)

// console.log(result2)

// Lab 2 
// let test = {name:'joe'}
// let test1 = {}
// function checkEmptyObj(obj) {
//   let key = Object.keys(obj)
//   console.log(key)
//   if(key.length > 0){
//     return 'not blank'
//   } else {
//     return 'blank'
//   }
// }

// let a = {}
// console.log(checkEmptyObj(test1))

//-------------------end of class slide------------

//----------------------rest para--------------------------
//  lab 1
// function mul(...rest){
//   let sum = 1

//  for (i = 0; i < rest.length; i++){
//   sum *= rest[i]
// } return sum
// }
// console.log(mul(4, 2, 3, 4))

//  alternative
// let calMulti = (...nums) => {
//   let sum = 1
//   for(let num of nums){
//     sum *= num
//   }
//   return sum
// }
// console.log(calMulti(4,5,6,7))

//  lab 2
// function filterOdd(...num) {
//   let arrNum = [...num]
//   // console.log(arrNum)

//   let result = arrNum.reduce((prev, curr) => {
//     // console.log(curr)
//     // console.log(prev)
//     if(curr %2 == 0){
//     prev.push(curr) 
//     } return prev
//   },[])
//   return result
// }

// let result = filterOdd(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)

//  lab 3 
// let mergeObj = (...obj) => {
//   // console.log(...obj)
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign( empty[i]=obj[i])
//     // console.log(obj[i])
//   }
//   // console.log(obj)
//   return empty
// }
// let obj1 = {name:'yui', age: 40}
// let obj2 = {name: 'teh', age: 45}
// let obj3 = {name: 'teg', age: 49}

// let result = mergeObj(obj1, obj2, obj3)
// console.log(result)

//----------------spread -------------------------
// lab 4 spread
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let newArr = [5,...nums1,-6,-1,...nums2]

// let sum = newArr.reduce((prev, curr) => prev += curr ,0)

// console.log(newArr)
// console.log(sum)

//lab 5 
// let array1 = [1,2,3,4,5,6]

// function spr(array1){
//   let newarr1 = [...array1]
//   newarr1[3] = newarr1[3] ** 2 
  
//   // console.log(...array1, array1[2]*10)
//   // console.log(newarr1)
//   return newarr1

// }

// console.log(spr(array1))

//lab 6 
// function personal(fname, lastname,...hobbies){
//   return `${fname} ${lastname} ${hobbies.length}`
// } 
// let result = personal('team', 'kn', 'skill', 'diving', 'skuba')
// console.log(result)

//lab 7 
// let doubleAndReturnArgs = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   // console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result = doubleAndReturnArgs([1, 2, 3], 4, 4)
// console.log(result)
// let result2 = doubleAndReturnArgs([2], 10, 4);
// console.log(result2)
// // expexted result: [2, 20, 8]
 
//lab 9 
// function cloneArray(input) {
//   let newArr = [...input]
//   return newArr
// }
// let a = [1, 2, 3, 4, 5, 6]
// let b = ["ddd",'ddd','ss',12]
// let result = cloneArray(a)
// let result2 = cloneArray(b)
// console.log(result)
// console.log(result2)

// Lab 10
// function cloneObject(input){
//   // console.log(input)
//   let cloneObject = {...input}
//   return cloneObject
// }

// let a = {name1:'Laika', age1:5, name2:'Bay', age2:15}
// let result = cloneObject(a)
// console.log(result)
//---------------destructuring----------------
// Lab 11 
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // Maya 
// console.log(second); // Marisa 
// console.log(third); // Chi

// Lab 12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // Raindrops on roses first index is rainsdrop
// console.log(whiskers); // whiskers on kittens second index whisker
// console.log(aFewOfMyFavoriteThings); 
// // [Bright copper kettles,warm woolen mittens] rest is aFewOfMyFavoriteThings

// Lab 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); //[10, 30, 20]
// // number[1] 20 -> 30 number[2] 30 -> 20

// Lab 14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *
// console.log(yearNeptuneDiscovered); // **

// Lab 15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *

// Lab 16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// getUserData({ firstName: 'Melissa' }); // **
// getUserData({}); // ***

// Lab 17
// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = [admin, guest]
// console.log(guest)
// console.log(admin)

// Lab 18
// function check({firstName,lastName,age}){
//   return age <= 18 ? "ไม่มีสิทธิ์เข้าใช้งาน" : `Hello ${firstName} ${lastName}`
// }

// let user = {
//   firstName: "Sudtipong",
//   lastName: 'Kaemnak',
//   age: 23
// }
// console.log(check(user))

// Lab 19
// let user = {
//   name: 'John',
//   years: 27
// };

// let {name , years:age} = user;
// console.log(name)
// console.log(age)

// Lab 20
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// function topSalaries(salaries) {
//   if(Object.keys(salaries).length == 0){
//     return null
//   }
// let arrvalue = Object.values(salaries)
//   let max = Math.max(...arrvalue)
//   // console.log(Math.max(...max))

// for(let key in salaries){
//   if(salaries[key] === max)
//   return key
// }
// }

// console.log(topSalaries(salaries))

// Lab 21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// [a, [b, [[[c, d], e], f]]] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// Lab 22
// const obj = { prop: 5, prop2: 10 };
// let {prop: a, prop2: b } = obj
// console.log(a)
// console.log(b)

// Lab 23
// let a, b;
// { a, b } = { a: 1, b: 2};
// // a , b has an error

// Lab 24
// const [, , , a, b] = [1, 2, 3];
// Console.log(a)
// Console.log(b)
// // a and b not defined yet 

// Lab 25 
// const q = { prop: 5, prop2: [10, 100] };

// let { prop: x, prop2: [, y] } = q
// console.log(x)
// console.log(y)

// Lab 26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y]
//     }
//   }
// } = q

// console.log(x)
// console.log(y)


// Lab 27 
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for( let key of names){
//   // console.log(key)
//  let {firstName, lastName} = key
//  console.log(`${firstName} ${lastName}`)
// }

// Lab 28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for(let key of users){
//   let {user , age = "unknown"} = key
//   console.log(`${user}, ${age}`)
// }