const game = () => {
    let countComputer_ = 0;
    let countPlayer_= 0;
    const choose_win = {
        'rock' : {
            'rock' : 'draw',
            'scissors' : 'win',
            'paper' : 'lose'
        },
        'paper' : {
            'rock' : 'win',
            'scissors' : 'lose',
            'paper' : 'draw'
        },
        'scissors' : {
            'rock' : 'lose',
            'scissors' : 'draw',
            'paper' : 'win'
        }
    }
    let chooseComputer = document.querySelector('#choose_computer');
    let choosePlayer = document.querySelector('#choose_player');
    let result = document.querySelector('#result');
    let countComputer = document.querySelector('#count_computer');
    let countPlayer = document.querySelector('#count_player');

    const randomComputer = () => {
        const computerOptions = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random() * 3);
        return computerOptions[random];
    }

    const play = () => {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissors = document.querySelector('.scissors');
        const playerOptions = [rock, paper, scissors];
        const reset = document.querySelector('.btn_reset');

        reset.addEventListener('click', function(){
            countComputer_ = 0;
            countPlayer_= 0;
            countComputer.textContent = countComputer_;
            countPlayer.textContent = countPlayer_;
            result.textContent = '';
            choosePlayer.textContent = '';
            chooseComputer.textContent = '';
        })
        
        playerOptions.forEach(option => {
            console.log('option', option, option.classList[1])
            option.addEventListener('click', function() {
                // choose player
                let rock_paper_scissors_p = this.classList[1];
                if(rock_paper_scissors_p === 'rock'){
                    choosePlayer.style = "color: var(--color-rock);";
                } else if(rock_paper_scissors_p === 'paper'){
                    choosePlayer.style = "color: var(--color-paper);";
                } else if(rock_paper_scissors_p === 'scissors'){
                    choosePlayer.style = "color: var(--color-scissors);";
                }
                choosePlayer.textContent = rock_paper_scissors_p;
                // choose computer
                let rock_paper_scissors_c = randomComputer();
                if(rock_paper_scissors_c === 'rock'){
                    chooseComputer.style = "color: var(--color-rock);";
                } else if(rock_paper_scissors_c === 'paper'){
                    chooseComputer.style = "color: var(--color-paper);";
                } else if(rock_paper_scissors_c === 'scissors'){
                    chooseComputer.style = "color: var(--color-scissors);";
                }
                chooseComputer.textContent = rock_paper_scissors_c;
                
                getResult();
            })
        })
    }

    const getResult = () => {
        switch(choose_win[choosePlayer.textContent][chooseComputer.textContent]){
            case 'win':
                    result.style = "color: green;";
                    result.textContent = 'win';
                    countPlayer_++;
                break;
            case 'lose':
                    result.style = "color: red;";
                    result.textContent = 'lose';
                    countComputer_++;
                break;
            default:
                result.style = "color: grey;";
                result.textContent = 'draw';
                break;
        }
        countComputer.textContent = countComputer_;
        countPlayer.textContent = countPlayer_;
    }

    play();
    
}

game();
