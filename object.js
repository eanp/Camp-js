const student = {
    firstName : 'Ean',
    middleName : 'Gempur',
    lastName : 'Prahara'
}
// const firstName = student.firstName
// const middleName = student.middleName
// const lastName = student.lastName
const {middleName,lastName,firstName} = student

console.log(firstName,middleName,lastName)

const rgb = [255,140,0]
// const red = rgb[0]
const [red,green,blue] = rgb
console.log(red,green,blue)