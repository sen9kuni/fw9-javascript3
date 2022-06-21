// const wait = (resolve, reject) => {

//     setTimeout(() => {
//         resolve('hello world')
//     }, 2000)
//     reject(new error('Terminated'))
// }

const countDown = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('hello world')
    }, 2000)
    const success = true
    if (success) {
        reject(new Error('Terminated'))
    } else {
        reject(new Error('Unknown'))
    }
    // reject(new error('Terminated'))
})

countDown
    .then((param1) => console.log(param1))
    .catch((e) => {
        switch (e.message) {
            case 'Terminated':
                {
                    console.log("Program terminated with error")
                    break
                }
            default:
                {
                    console.log('Error happend')
                }
        }
    })