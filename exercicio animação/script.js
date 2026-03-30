const nome = document.querySelector('#nome')
const num = document.querySelector('#numero')
const btn = document.querySelector('#btn')
const nomeCamisa = document.querySelector('#camisa__nome')
const numCamisa = document.querySelector('#camisa__numero')

btn.addEventListener('click', () => {
    nomeUser = nome.value
    nomeCamisa.innerHTML = nomeUser
    
    numUser = num.value
    numCamisa.innerHTML = numUser
})