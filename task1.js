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

// membuat fungsi yang ber isi cekHariKerja yang di isi parameter
const tryHari = cekHariKerja('minggu')

tryHari
// jika resovle akan menghasilkan parameter yang di isi dan ditambah string 'adalah hari kerja'
    .then((value) => console.log(`${value} adalah hari kerja`))
    // jika reject akan menghasilkan info error
    .catch(err => console.error(err))



// try and catch
// membuat fungsi async dengan parameter day
async function thisDay(day) {
    console.log(`mengecek hari ${day}`)
    try {
        // hasil akan menunggu fungsi hasil cekHariKerja dan mengembalikan nilai parameter
        const hasil = await cekHariKerja(day)
            // saat berhasil akan menghasilkan nilai hasil + string " adalah hari kerja" 
        console.log(hasil + " adalah hari kerja")
    } catch (error) {
        // saat gagal hanya akan menmpilkan error
        console.error(error)
    }
}

thisDay('senin')