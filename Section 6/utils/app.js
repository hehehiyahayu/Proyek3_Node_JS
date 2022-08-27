const request = require('request')

const starwarsChar = (number, callback) => {
    const url = "https://swapi.dev/api/people/"+number

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect APIs', undefined)
        }else if(response.body.name === 0){
            callback('Please re-run this program until the program found the data', undefined)
        }else{
            callback({
                name:  response.body.name,
                gender: response.body.gender,
                homeworld: + response.body.homeworld,
                vehicles: + response.body.vehicles
            })
        }
    })
}

module.exports = starwarsChar
