const root = document.querySelector('.root')
const p = document.createElement('p')
const button = document.querySelector('#guessBtn')
let attempts = 10
p.innerText = `You have ${attempts} guesses left`
root.appendChild(p)
let answer = Math.ceil(Math.random()*100)


function submitGuess(event){
    event.preventDefault()
    const inputEl = document.querySelector('#number')
    console.log(inputEl.value,answer)
    if(inputEl.value==answer){
        p.innerText = `Congratz, You won!`
        button.value = 'Restart'
    }
    else{
        attempts--;
        p.innerText = `You have ${attempts} guesses left`
        inputEl.value = ''
    }
}

function restart(){
    if(button.value == 'Restart'){
        button.value = 'Guess'
        attempts = 11
        answer =  Math.ceil(Math.random()*100)
        p.innerText = `You have ${attempts} guesses left`
        return
    }
}