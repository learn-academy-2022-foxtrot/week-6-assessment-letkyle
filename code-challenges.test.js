// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

//create a test function named spellCheck

describe('spellCheck', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    ]
    expect(spellCheck(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// spellCheck in undefined - good fail

// b) Create the function that makes the test pass.

//make a function that returns name values with first letter capped, and return occupation value
// iterate through the array with the .map method while passing the object as a param 
// use string interp and then .split in order to split first and last names then since we need to capitalize the first letter of each then use map to iterate over that
//then i use .touppercase on name[0] since the first letter would be index 0 then use .slice and .join to combine it all back to a string
// finally use string interp the object 

const spellCheck = (array) => {
  return array.map ((object) => 
  `${object.name.split(" ").map((name) => 
    name[0].toUpperCase() + name.slice(1)).join(" ")} is ${object.occupation}.`
    )
}

//output pass

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//create a test function named integersOnly

describe('integersOnly', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true] 
    // Expected output: [ 2, 1, -1 ]
    expect(integersOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(integersOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// good fail integersOnly not defined

// b) Create the function that makes the test pass.

//make a function that divides integers by three within the array
// declare number to equal a number
//use .filter to take out wanted data which will be all integers
// use modular to get remainder

const integersOnly = (array) => {
  let number = 123
  return array.filter((element) => typeof element == typeof number).map((element) => element % 3)
}

//output pass

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//create a test function named mathIsHard

describe('mathIsHard', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed.', () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(mathIsHard(cubeAndSum1)).toEqual(99)
    expect(mathIsHard(cubeAndSum2)).toEqual(1125)
  })
})

//mathIsHard not defined - good fail

// b) Create the function that makes the test pass.

// first I would want to use .reduce to reduce the array into just one and add all the numbers together
// then I want to cube that number

const mathIsHard = (array) => {
  return array.reduce((accumulator, number) =>
  ( number + accumulator) 
  )
}
// tried number.cube(3)
// found out that I need to cube the number first then get the sum
//output failed 
// Expected: 99
// Received: 9