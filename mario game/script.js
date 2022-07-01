const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const gameover = document.querySelector(".game-board")

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump') 
    },500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 &&pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'assets/3a66481b-e161-40ce-8e3c-8bb0f42145b4.png'
        mario.style.width = '100px'

        
        gameover.innerHTML = "Fim de Jogo. Atualize a página para jogar novamente"
        gameover.style.color = 'red'        

        clearInterval(loop)

    }
}, 10)

const keys = document.addEventListener('keydown',jump)