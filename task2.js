const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'Desember'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}


const cb = (err, month) => {
    if (err) {
        console.log(err)
    }
    const answer = month.map(value => console.log(value))
}

getmonth(cb)