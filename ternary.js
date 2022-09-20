const nama = 'rizky'
const umur = 18
const alamat = 'tangerang'

// if(nama !== 'alvin'){
//     console.log('nama adalah alvin')
// } else {
//     console.log('nama bukan alvin')
// }

// nama == 'alvin' && console.log('nama adalah alvin')
// nama !== 'alvin' ? console.log('nama adalah alvin') : console.log('nama bukan alvin')

nama == 'rizky' ? (umur == 18 ? (alamat == 'tangerang' ? console.log('semua benar') : console.log('nama dan umur benar')) : console.log('nama benar tapi umur salah')) : console.log('nama salah umur salah') 

dataSiswa = undefined

!dataSiswa && console.log('data siswa belum ada')