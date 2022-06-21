const namaKaryawan = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const karyawan = ['budi', 'salsa', 'judith', 'yoga', 'maman']
            let cek = karyawan.find((item) => {
                return item === nama
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Anda bukan karyawan'))
            }
        }, 3000)
    })
}

async function absensi(nama) {
    try {
        const hasil = await namaKaryawan(nama)
        console.log(hasil + " selamat datang")
    } catch (error) {
        console.error(error)
    }
}

absensi('budi')
absensi('salsa')
absensi('abud')