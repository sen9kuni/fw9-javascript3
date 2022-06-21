const countDown = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('hello world')
    }, 2000)
    const success = false
    if (success) {
        reject(new Error('Terminated'))
    } else {
        reject(new Error('Unknown'))
    }
})

async function evalCountDown() {
    try {
        const result = await countDown
        console.log('Success', result)
    } catch (error) {
        switch (err.message) {
            case 'Terminated':
                {
                    console.log('failed, ', err.message)
                    break
                }
            default:
                {
                    console.log('failed, ', err.message)
                }
        }
    } finally {
        console.log('Ended process')
    }
}