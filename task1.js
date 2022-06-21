const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


// then and catch
// const tryHari = cekHariKerja('minggu')

// tryHari
//     .then((value) => console.log(`${value} adalah hari kerja`))
//     .catch(err => console.error(err))



// try and catch
async function thisDay(day) {
    console.log(`mengecek hari ${day}`)
    try {
        const hasil = await cekHariKerja(day)
        console.log(hasil + " adalah hari kerja")
    } catch (error) {
        console.error(error)
    }
}

thisDay('senin')