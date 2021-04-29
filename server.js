const fs = require('fs');

//synchornous way
const data = fs.readFileSync('./data.json', 'utf8')
console.log(data)

//asynchornous way
fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    console.log(data)
})

const dirs = fs.readdirSync('./');
console.log(dirs)


fs.readdir('./', (err, data) => {
    if (err) return console.error(err);
    console.log(data)
})


// write the file
fs.writeFileSync('message.txt', 'I am writing the file')


//asynchrouns way

fs.writeFile('message1.tet', 'I am learning node from httpguy', (err) => {
    if (err) return console.error(err);
    console.log('File written suuccessfully')
})