const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${chute}</span>
    `
}

function onSpeak(event) {
    chute = event.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChuteValido(chute)
}

recognition.addEventListener('end', () => recognition.start())