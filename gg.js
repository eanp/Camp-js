const printGanjilGenap = value => {
    for(let i=1; i <= value; i++){
        i % 2 == 0 ? console.log(`${i} adalah bilangan genap`) : console.log(`${i} adalah bilangan ganjil`)
    }
}

// printGanjilGenap(10)
// printGanjilGenap = 10

const segitiga = value => {
    let output = ''
    for(let i=1; i<= value; i++){
        for(let j=1; j <= i; j++){
            output += i 
        }
        output += i%2==0 ? ' genap' : ' ganjil'
        output += '\n'
    }
    console.log(output)
}

segitiga(10)