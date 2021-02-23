const express = require('express')
const expressHbs = require('express-handlebars')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'hbs')
app.engine('.hbs', expressHbs({
    defaultLayout: false
}))

app.set('views', path.join(__dirname, 'static'))

const usersDB = path.join(__dirname, '/dataBase/usersDB.json')

app.get('/users', (req, res) => {
    fs.readFile(usersDB, ((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const person = JSON.parse(data)
        res.render('allUsers', {person})

    }))

})
app.get('/users/:userId', (req, res) => {
    const {userId} = req.params
    fs.readFile(usersDB, ((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const person = JSON.parse(data)
        if (userId <= person.length && userId > 0) {
            res.render('user', person[userId])
        } else {
            res.redirect('/error')
        }

    }))
})
app.get('/error', (req, res) => {
    res.render('error')
})
app.get('/log', (req, res) => {


    res.render('log')
})
app.post('/log', (req, res) => {
    fs.readFile(usersDB, ((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const person = JSON.parse(data)
        person.forEach(value => {
                if (value.email === req.body.email && value.password === +req.body.password) {
                    res.send('Welcome')
                }
            }
        )
    }))
})
app.get('/reg', (req, res) => {
    res.render('reg')
})
app.post('/reg', (req, res) => {
    const newPerson = req.body
    console.log(req.body)

    fs.readFile(usersDB, ((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const person = JSON.parse(data)
        person.push(newPerson)

        fs.writeFile(usersDB, JSON.stringify(person), err1 => {
            if(err1){
                console.log(err1)
            }
        })
    }))

})
app.listen(5000, () => {
    console.log('Port 5000 active')
})
