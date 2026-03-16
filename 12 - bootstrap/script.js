const conteudo = document.querySelector('.hidden')

// const btnShow = document.querySelector('.btn-success')
// const btnColor = document.querySelector('.btn-info')
// const btnRounded = document.querySelector('.btn-warning')

// btnShow.addEventListener('click', () => {
//     conteudo.classList.toggle('active')
// })
// btnColor.addEventListener('click', () => {
//     conteudo.classList.add('bg-info')
// })
// btnRounded.addEventListener('click', () => {
//     conteudo.classList.remove('rounded-4')
// })


let btn = document.querySelectorAll('.btn')

btn.forEach(elem => {
    console.log(elem)
    
    elem.addEventListener('click', () => {
        console.log(elem.innerHTML + ' foi clicado')

        if (elem.classList.contains('btn-success')) {
            conteudo.classList.toggle('active')
        }

        if (elem.classList.contains('btn-info')) {
            conteudo.classList.toggle('bg-info')
        } else {
            conteudo.classList.remove('bg-info')
        }

        if (elem.classList.contains('btn-warning')) {
            conteudo.classList.toggle('rounded-4')
        } else {
            conteudo.classList.remove('rounded-4')
        }
    })
})