let names = []
console.log(names)
names = ['Shan', 'Adam','Eve','Ram','Joe','Jane','Joe']//string array
let ages = [10,20,30,40,56,78,100]//number array

console.log(names[0])
console.log(ages.indexOf())

let car = {
    make: 'BMW',
    model: 'XS',
    year: 2022,
    type: 'suv'
}

let employee = {
    name: 'Shan',
    email: 'Shan@test.com',
    address: '123 Main st, San CA 96765', //string
    interests: ['reading', 'sports', 'travel']//array of string 
}
console.log(employee)
console.log(car)
console.log(employee.name)
console.log(car.make)

let country = {
    nam: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'Telugu', 'Tamil', 'Malayalam', 'Marathi'],
    states: 28,
    regions: 4
}
console.log(country.languages[3])

nameOfPerson //camel case

const countries = ['India','USA','Mexico','UK','France']
console.log(countries)
countries.push('Pakistan')
console.log(countries)

countries.unshift('Canada')
console.log(countries)