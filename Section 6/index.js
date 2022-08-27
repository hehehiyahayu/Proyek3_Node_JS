console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer')
}, 2000);

console.log('Stopping');

console.log()

// Call Stack

function funcB(){
    return "End of B";
}

function funcA(){
    let str = funcB();
    console.log(str);
}

funcA();

console.log()

//Callback Queue

function block1Second() {
    console.log("1 second has passed")
}

setTimeout(() => {
    console.log("Hello")
}, 1000)

block1Second();

console.log("World")

//Event Loop

function sayOne(){
    sayThree();
    console.log('1');
}

function sayTwo(){
    console.log('2');
}

function sayThree(){
    console.log('3');
}

console.log('5')
sayOne()
console.log('4')
sayTwo()

const request = require('request');

const url = 'https://zoo-animal-api.herokuapp.com/animals/rand';

console.log()

request({url: url, json:true}, (error, response) => {
    console.log()
    console.log(`Animal's name:` + response.body.name)
    console.log(`Animal's animal type: ` + response.body.animal_type)
    console.log(`Latin name: ` + response.body.latin_name)
    console.log(`Habitat: ` + response.body.habitat)
    console.log()
});

request({url: url, json:true}, (error, response) => {
    if(error){
        console.log('APIs is deactived mode')
    }else if(response.body.name === 0){
        console.loh('Unable to detect animal`s data')
    }else{
        console.log()
        console.log(`Animal's name:` + response.body.name)
        console.log(`Animal's animal type: ` + response.body.animal_type)
        console.log(`Latin name: ` + response.body.latin_name)
        console.log(`Habitat: ` + response.body.habitat)
        console.log()
    }
});

console.log()

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 10,
            longitude: 10
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log()
    console.log(data)
    console.log()
})

const starwars = require('./utils/app.js')

starwars(11, (number, error) => {
    console.log()
    console.log('Error', error)
    console.log('Data', number)
})

console.log()

starwars(10, (error, data) => {
    if(error){
        return console.log(error)
    }
    
    forecast(data.name, data.gender, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(data.homeworld)
        console.log(forecastData)
    })
})

console.log()

const name = "Andrew"
const userAge = 27

const user1 = {
    name: name,
    age: userAge,
    location: "Philadelphia"
}

console.log(user1)

const user2 = {
    name,
    age: userAge,
    location: "Philadelphia"
}

console.log(user2)

const {age, location: address} = user1
console.log(age)
console.log(address)

console.log()

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)

console.log()

const https = require('https')

const request2 = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log('Animal data' + body)
    })
})

request2.on('error', (error) => {
    console.log('An error', error)
})

request2.end()