const users = [
    { firstName: 'Aarav', lastName: 'Patel', age: 28, gender: 'Male' },
    { firstName: 'Isha', lastName: 'Sharma', age: 24, gender: 'Female' },
    { firstName: 'Rahul', lastName: 'Kumar', age: 32, gender: 'Male' },
    { firstName: 'Neha', lastName: 'Singh', age: 29, gender: 'Female' },
    { firstName: 'Aryan', lastName: 'Gupta', age: 31, gender: 'Male' },
    { firstName: 'Ananya', lastName: 'Verma', age: 26, gender: 'Female' },
    { firstName: 'Vivek', lastName: 'Yadav', age: 35, gender: 'Male' },
    { firstName: 'Sneha', lastName: 'Mishra', age: 30, gender: 'Female' },
    { firstName: 'Ravi', lastName: 'Malhotra', age: 27, gender: 'Male' },
    { firstName: 'Pooja', lastName: 'Reddy', age: 25, gender: 'Female' }
  ];
  
//   console.log(users);
// using foreach firstname
// here we can see the result is like list form one after the other
// let firstNames=users.forEach((user)=>{
// console.log(user.firstName)
// })


//   mapping
// array form me result milega
// let firstNames=users.map((user)=>{
//     return user.firstName+""+user.lasttName
// })
// console.log(firstNames)


// array mapping filter
//if i need only male or female
// let female=users.map((user)=>{
// if(users.gender==='Female'){
//      return user.firstName+""+user.lasttName
// }
// })..?

// let females=users.filter((user)=>{
//     return user.gender=='Female'
// })
// console.log(females)



// let males=users.filter((user)=>{
//     return user.gender=='Male'
// })
// console.log(males)


// DIFF B/W FOREACH AND MAP

/**foreach cannot return value
 * chainning not do 
*/

/*map return value
 * chainning can do 
*/



// Q1 write names ,gender should be male & age>20

let males=users.filter((user)=>{
    if(user.gender=='Male'&&user.age>27)
    return user
}).map((user)=>{
    return user.firstName
})
 console.log(males)


