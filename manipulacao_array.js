let techs = ["html", "css", "js"]
console.log("Array original")
console.log(techs)
// adicionar um item no fim
techs.push("ReacJS")
console.log("Adiciona no fim do array")
console.log(techs)
// adicionar um item no começo
techs.unshift("sql")
console.log("Adiciona no início do array")
console.log(techs)
// remover do fim
techs.pop()
console.log("Remove do fim do array")
console.log(techs)
// remover do início
techs.shift()
console.log("Remove do início do array")
console.log(techs)
// pegar somente alguns elementos do array
console.log("Pegar somente alguns elementos do array")
console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do 
techs = ["html", "css", "js"]
console.log("Remover 1 ou mais itens em qualquer posição do array")
console.log(techs.splice(1, 2))
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log("Encontrar a posição de um elemento no array")
console.log(index)