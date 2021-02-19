const fs = require('fs')
let path = require('path')

const dirName1800 = `${__dirname}/1800`
const dirName2000 = `${__dirname}/2000`

// Task
// CREATE 2 DIRECTORIES 1800 AND 2000
// EACH DIRECTORY NEED CONTAIN MEN AND WOMEN
// SORT WOMEN TO 2000 AND MEN TO 1800

//CREATING DIRECTORIES
// fs.mkdir(`${__dirname}/2000`, err => {
//     if (err) {
//         console.log(err)
//     }
// })

// fs.mkdir(`${__dirname}/1800`, err => {
//     if (err) {
//         console.log(err)
//     }
// })

//CREATING FILES

// fs.writeFile(`${dirName2000}/Bogdan.json`, '{name: "Bogdan", gender: "male"}' , err => {
//     if (err) {
//         console.log(err)
//     }
// })

//READING FILES AND SORTING

fs.readdir(dirName2000, ((err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(fileName => {
        fs.readFile( path.join(dirName2000, `${fileName}`), ((err1, stats) => {
            if (err1) {
                console.log(err)
                return
            }
            let person = JSON.parse(stats)
            if (person.gender === 'male') {
                fs.rename(path.join(dirName2000, `${fileName}`), path.join(dirName1800, `${fileName}`), err2 => {
                    if (err2) {
                        console.log(err2)
                    }
                })
            }

        }))
    })
}))
fs.readdir(dirName1800, ((err, files) => {
        if (err) {
            console.log(err)
        }
        files.forEach(fileName => {
            fs.readFile(path.join(dirName1800, `${fileName}`), (err1, data) => {
                let person = JSON.parse(data)
                if (person.gender === 'female') {
                    fs.rename(path.join(dirName1800, `${fileName}`), path.join(dirName2000, `${fileName}`), err2 => {
                        console.log(err2)
                    })
                }
            })
        })
    })
)

