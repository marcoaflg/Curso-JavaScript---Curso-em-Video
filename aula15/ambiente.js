let num = [1,2,3,5,9]
num.sort()
num.push(10)
// num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(100)

console.log(`O valor 10 está na posição ${pos}`)