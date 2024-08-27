
const game = () => {
    let countComputer = 0;
    let countPlayer= 0;
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
        playerOptions.forEach(option => {
            console.log('option', option, option.classList[1])
            option.addEventListener('click', function() {
                choosePlayer.textContent = this.classList[1];
                chooseComputer.textContent = randomComputer();
                getResult();
            })
        })
    }

    const getResult = () => {
        let result = document.querySelector('#result');
        switch(choose_win[choosePlayer.textContent][chooseComputer.textContent]){
            case 'win':
                    result.style = "color: green;";
                    result.textContent = 'win';
                    countPlayer++;
                break;
            case 'lose':
                    result.style = "color: red;";
                    result.textContent = 'lose';
                    countComputer++;
                break;
            default:
                result.style = "color: grey;";
                result.textContent = 'draw';
                break;
        }
        document.querySelector('#count_computer').textContent = countComputer;
        document.querySelector('#count_player').textContent = countPlayer;
    }

    play();
    
}

game();


    // let countComputer = 0;
    // let countPlayer= 0;

    // let chooseComputer = document.querySelector('#choose_computer');
    // let choosePlayer = document.querySelector('#choose_player');
    
    // const choose_win = {
    //     'rock' : {
    //         'rock' : 'draw',
    //         'scissors' : 'win',
    //         'paper' : 'lose'
    //     },
    //     'paper' : {
    //         'rock' : 'win',
    //         'scissors' : 'lose',
    //         'paper' : 'draw'
    //     },
    //     'scissors' : {
    //         'rock' : 'lose',
    //         'scissors' : 'draw',
    //         'paper' : 'win'
    //     }
    // }

    // function clickRock() {
    //     choosePlayer.textContent = 'rock';
    //     chooseComputer.textContent = randomComputer();
    //     getResult();
    // }
    
    // function clickPaper() {
    //     choosePlayer.textContent = 'paper';
    //     chooseComputer.textContent = randomComputer();
    //     getResult();
    // }
    
    // function clickScissors() {
    //     choosePlayer.textContent = 'scissors';
    //     chooseComputer.textContent = randomComputer();
    //     getResult();
    // }
    
    // function randomComputer(){
    //     const choose = ['rock', 'paper', 'scissors'];
    //     const random = Math.floor(Math.random() * 3);
    //     return choose[random];
    // }
    
    // function getResult() {
    //     let result = document.querySelector('#result');
        
    //     switch(choose_win[choosePlayer.textContent][chooseComputer.textContent]){
    //         case 'win':
    //                 result.style = "color: green;";
    //                 result.textContent = 'win';
    //                 countPlayer++;
    //             break;
    //         case 'lose':
    //                 result.style = "color: red;";
    //                 result.textContent = 'lose';
    //                 countComputer++;
    //             break;
    //         default:
    //             result.style = "color: grey;";
    //             result.textContent = 'draw';
    //             break;
    //     }
    //     document.querySelector('#count_computer').textContent = countComputer;
    //     document.querySelector('#count_player').textContent = countPlayer;
    // }
 
