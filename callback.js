function sayHello(name, callback){
    let greeting = `Hello ${name}`
    callback(greeting)
}

function showGreeting(quote){
    console.log(quote)
}

function showGreeting2(quote){
    console.log(`${quote} dan selamat datang`)
}



sayHello("Ean", showGreeting2)