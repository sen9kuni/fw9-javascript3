function countDown2sec(cb) {
    setTimeout(() => {
        cb()
    }, 2000);
}

function cd6s(cb) {
    countDown2sec(() => {
        countDown2sec(() => {
            countDown2sec(() => {
                cb()
            })
        })
    })
}


cd6s(() => {
    console.log('bro hello')
})


// countDown(() => {
//     console.log('hello')
// })