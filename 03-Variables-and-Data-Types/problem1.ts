import readline from 'readline';

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})
rl.question("Enter your first name : ", (firstName) => {
  rl.question("Enter your last name : ", (lastName) => {
   rl.question("Enter your born year : " , (birthYear) => {
    const currentYear = 2023
    const currentAge = currentYear - parseInt(birthYear)
    const fullName = `${firstName} ${lastName}`
    console.log(`Hello, ${fullName}! You are ${currentAge} years old`)
    rl.close()
   })
  })
})
