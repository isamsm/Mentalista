function mentalize () {
    var secretNum = parseInt(Math.random() * 1001)

    for(let i = 0; i < 11; i++) {
    var randomNum = prompt('Insira o palpite de um número de 1 a 1000. Voce tem 10 chances e já deu ' + i)
        if (isNaN(randomNum)) 
        {
            alert('Seu palpite deve ser númerico!')
        }
        else if (secretNum > randomNum) 
        {
            alert('O número secreto é maior do que ' + randomNum + '. Tente novamente')
        } 
            else if (secretNum < randomNum) 
        {
            alert('O número secreto é menor do que ' + randomNum + '. Tente novamente')
        } 
            else 
        {
            alert('Parabéns! Voce descobriu o número secreto.')
            break
        }
        
        if (i === 10) 
        {
            alert('Que pena, seu número de tentativas foi excedido, o número secreto era: ' + secretNum)
        }
    }
}