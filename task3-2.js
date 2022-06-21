let stocks = {
    mieInstan: ['indomie', 'mie sedap', 'sarimie'],
    topping: ['telur goreng', 'suwiran ayam', 'telur rebus']
}

let shopOpen = false

function warmindo(timeTake) {
    return new Promise((resolve, reject) => {
        if (shopOpen) {
            setTimeout(resolve, timeTake)
        } else {
            reject(console.log('Toko sudah tutup'))
        }
    })
}

async function kitchen() {
    try {

        await warmindo(1000)
        console.log(`mie ${stocks.mieInstan[0]} dan ${stocks.topping[1]} dipilih`)

        await warmindo(4000)
        console.log('mulai merebus mie')

        await warmindo(1000)
        console.log('masukan bumbu ke mangkok')

        await warmindo(1000)
        console.log('taruh mie ke mangkok')

        await warmindo(2000)
        console.log('aduk mie dan bumbu sampai merata')

        await warmindo(1000)
        console.log(`taburkan ${stocks.topping[1]} diatas mie`)

        await warmindo(2000)
        console.log('mie siap disajikan')
    } catch (error) {
        console.log('pelanggan pergi', error);
    } finally {

        console.log("Jam 22.00 warung tutup")
    }
}

kitchen()