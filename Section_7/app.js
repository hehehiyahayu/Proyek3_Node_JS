const path = require('path')
const express = require('express')
const hbs = require('hbs')
var exphbs = require('express-handlebars');

const app = express()
const publicDirectoryPath = path.join(__dirname, './public')

const viewsPath = path.join(__dirname, './public/templates/views')

app.set('views', viewsPath)

const partialsPath = path.join(__dirname, './public/templates/partials')
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

app.engine('hbs', exphbs.engine({extname: 'hbs', defaultView: 'index' }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Title',
        name: 'Haidar Ali'
    })
})

app.get('/404', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Haidar Ali',
        errorMessage: 'Page not found.'
    })
})

app.get('/animals', (req, res) => {
    res.send({
        name: 'Tiger',
        habitat: 'Forest and Savanna'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

