function verificaChuteValido(chute) {
    const numero = +chute

    // while(numero !== numeroSecreto) {
    //
    // }

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Parabéns!</h1>
        <h3>Você acertou o número secreto!</h3>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar_novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long fa-bounce" style="color: #ffffff;"></i></div>'
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long fa-bounce" style="color: #ffffff; "></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar_novamente'){
        window.location.reload()
    }
})