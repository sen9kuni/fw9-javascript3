const fetch = require('node-fetch');


const getAllData = async(url) => {
    try {
        const request = await fetch(url)
        const data = await request.json()
        return data
    } catch {
        console.log('cannot connect')
    }
}

const getName = async() => {
    try {
        const name1 = await getAllData('https://jsonplaceholder.typicode.com/users/1')
        const name2 = await getAllData('https://jsonplaceholder.typicode.com/users/2')
        const name3 = await getAllData('https://jsonplaceholder.typicode.com/users/3')
        const name4 = await getAllData('https://jsonplaceholder.typicode.com/users/4')
        const name5 = await getAllData('https://jsonplaceholder.typicode.com/users/5')
        const name6 = await getAllData('https://jsonplaceholder.typicode.com/users/6')
        const name7 = await getAllData('https://jsonplaceholder.typicode.com/users/7')
        const name8 = await getAllData('https://jsonplaceholder.typicode.com/users/8')
        const name9 = await getAllData('https://jsonplaceholder.typicode.com/users/9')
        const name10 = await getAllData('https://jsonplaceholder.typicode.com/users/10')
            // mengeluarkan tipe data string
            // console.log(name1.name)
            // console.log(name2.name)
            // console.log(name3.name)
            // console.log(name4.name)
            // console.log(name5.name)
            // console.log(name6.name)
            // console.log(name7.name)
            // console.log(name8.name)
            // console.log(name9.name)
            // console.log(name10.name)

        // mengeluarkan tipe data array
        let final = []
        final.push(name1.name, name2.name, name3.name, name4.name, name5.name, name6.name, name7.name, name8.name, name9.name, name10.name)
        console.log(final)
    } catch (error) {
        console.log("data tidak ada ", error)
    }
}

getName()