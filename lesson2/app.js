const express = require('express')
const expressHBS = require('express-handlebars')
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//HBS CONFIG START----------------
app.use(express.static(path.join(__dirname, 'static'))) //static directory

app.set('view engine', '.hbs')
app.engine('.hbs', expressHBS({
    defaultLayout: false
}))
app.set('views', path.join(__dirname, 'static'))
//HBS CONFIG END----------------

const users = [
    {name: 'Dima', gender: 'male'},
    {name: 'Dido', gender: 'male'},
    {name: 'Diana', gender: 'female'},
]


//HTTP METHODS


//GET
app.get('/hello', (req, res) => {
    //res.send contains write + end
    //res.send('WORLD')
//--------------------------------
    // res.write always waiting for request, so that's why we use res.end,

    // res.write('WORLD')
    // res.end()//--------------------------------

})

app.get('/login', (req, res) => {
    res.render('login', {isOk: true, name: "Andrey"})
})
app.post('/login', ((req, res) => {

    users.push(req.body)
    // res.json('User registered')
    res.redirect('/users')

}))


app.get('/users', (req, res) => {

    const {gender} = req.query
    const filterUsers = users.filter(value => value.gender === gender)
    res.render('users', {users: filterUsers})
    // res.json([
    //     {name: 'Dima'},
    //     {name: 'Olga'},
    //     {name: 'Ira'},
    // ])
})
app.get('/users/:userId', (req, res) => {

    const {userId} = req.params
    res.json(users[userId])
})

app.listen(5000, () => {
    console.log('App listen 5000')
})
