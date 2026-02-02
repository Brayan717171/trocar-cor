'use strict'

const botaoTrocarCor = document.getElementById('trocar-cor')

const cores = {
    'azul': 'blue',
    'vermelho': 'red',
    'verde': 'green',
    'amarelo': 'yellow',
    'preto': 'black',
}

function trocarCor () {
    const corDigitada = document.getElementById('cor').value.toLowerCase().trim()

    // 2. Busca a tradução no dicionário. 
    const corTraduzida = cores[corDigitada] 

    // 3. Aplica a cor traduzida na sua variável CSS
    document.documentElement.style.setProperty('--cor-bg', corTraduzida)
    
    console.log("Cor aplicada:", corTraduzida)

}

 botaoTrocarCor.addEventListener('click', trocarCor)
