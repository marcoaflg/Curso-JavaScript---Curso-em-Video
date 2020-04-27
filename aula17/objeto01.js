let amigo = 
{nome: 'Marco',
 sexo: 'M',
 peso: 80,
 engordar(p) {
    console.log('Emagreceu')
    this.peso += p    
 }   
}
amigo.engordar(-2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)