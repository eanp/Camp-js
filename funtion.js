const tambah = (num1,num2) => {
    total = num1 + num2
    return total
}
const tambah2 = (num1,num2) => num1 + num2

// console.log(tambah2(3,4))

const aritmatika = {
    pengurangan: function(num1,num2){
        total = num1 - num2 
        return total
    },
    perkalian : (num1,num2) => {
        total = num1 * num2
        return total
    },
}

// console.log(aritmatika.perkalian(10,5))

let angka = [2,1,5,6,9,9,10];

let sortingangka = angka.sort()
let mappingangka = angka.map(x => x%2==0 ? `${x} adalah genap` : `${x} adalah ganjil`)
console.log(mappingangka)