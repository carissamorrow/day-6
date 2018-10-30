//truthy:
//string with contents
//object
//array
//non 0 numbers         //these take up memory

//falsey: 
//empty string
//0
//undefined
//null
//nan     //these do not take up memory

let me = {
  username: 'MegaMark',
  email: "m@m.com",
  formal: 'Mr.',
  name: 'Mark'
}

let greeting = ''

function greet(user) {
  if (user.formal) {
    greeting = `Hello ${user.formal} ${user.name}`
  } else {
    greeting = 'Hello ' + user.name
  }
}
greet(me)
//or
console.log(greeting)

//variables created in the function only exist in the function unless returned
//let test = "test"

function greet2(user) {
  if (user) {
    console.log('no user')
    return 'Hello'
  }
  console.log(greet2())
}


//let rent = {
//boise: 1000,
//portland: 4000,
//lA: 100000
//}

function getRent(cityName) {
  if (cityName == "boise")
    return 1000

  else if (cityName == "portland") {
    return 4000
  }
  console.log(getRent('boise'))


  let rent = {
    boise: 1000,
    portland: 4000,
    lA: 10000
  }

  function getRentFromData(cityName) {
    //dot notation looks for the literal property name
    //bracket notation is how we pass variables as property names
    if (rent.boise) {

      console.log(rent[cityName])
    }
  }

  //example
  //function conditionalDay(num) {
  // if (num == 0) {
  //return "Sunday"
  // }
  //else if (num == 1) {
  //return "Monday"
  //}
  //} etc

  //better example
  // function switchDay(num) {
  //let out = ''
  //switch (num) {
  //case 0:
  //out = "Sunday"
  //break; 
  //case 1:
  //out = "Monday"
  //break;
  //}
  //return out
  //} etc 

  //best example
  //let daysOfTheWeek = ['sunday', 'monday', 'tuesday']
  //function arrayDay(num) {
  //if(num > -1 && num < daysOfTheWeek.length)
  //return daysOfTheWeek[num]
  //}

  //ternary: true ? 'true-thing : 'false thing'
}
