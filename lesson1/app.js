const x = require('./dir/file')


// x.createUser('Roman', 22)

// console.log('*****************************8')
// console.log(__dirname)
// console.log(__filename)
// console.log(global)
// console.log('*****************************8')


// console.log(process)

//USE FS TO WORK WITH FILES

const fs = require('fs')
const path = require('path')

const filePath = __dirname + '/netflix/king.mp4'
const dirName = __dirname + '/dir'
//CREATE FILE AND NOTE DATA
// fs.writeFile(filePath, 'Hello sep-2021', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//UPDATE FILE
// fs.appendFile(filePath, 'Hello \n', err => {
//     if(err){
//         console.log(err)
//     }
// })

//CREATE DIRECTORY
// fs.mkdir(`${__dirname}/netflix/films/chubaka`, {recursive: true}, err => {
//     if(err){
//         console.log(err)
//     }
// })

// fs.readFile(filePath, (err, data) => {
//     console.log(data.toString())
// })

//REMOVE DIRECTORY
// fs.rmdir(`${__dirname}/netflix`, {recursive: true}, err => {
//     if(err){
//         console.log(err)
//     }
// })

//READ FILE
// fs.readdir(dirName, ((err, files) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     files.forEach(filename => {
//         fs.stat(dirName + `/${filename}`, ((err1, stats) => {
//             console.log('--------------------------------------')
//                 //INFO ABOUT FILE
//             console.log(stats.isDirectory())
//             console.log('--------------------------------------')
//         }))
//     })
//
// } ))

//DELETE FILE BY PASS
// fs.unlink(filePath, err => {
//     if(err){
//         console.log(err)
//     }
// })

//RENAME OR MOVE FILES
// fs.rename(`${__dirname}/dir/file2.txt`,`${__dirname}/netflix/king.mp4` , err => {
//     if(err){
//         console.log(err)
//     }
// })


// let s = path.join(__dirname,'dir','file.txt')


//STREAM
// const readStream = fs.createReadStream(filePath);
// readStream.on('data', chunk => {
//     console.log(chunk)
// })

const readStream = fs.createReadStream(path.join(__dirname, 'dir', 'king.txt'))
const writeStream = fs.createWriteStream(path.join(__dirname, 'dir', 'data.txt'))

//
// readStream.on('data', chunk => {
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)
