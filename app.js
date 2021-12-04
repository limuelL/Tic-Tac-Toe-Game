
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');
const choice5 = document.querySelector('#choice5');
const choice6 = document.querySelector('#choice6');
const choice7 = document.querySelector('#choice7');
const choice8 = document.querySelector('#choice8');
const choice9 = document.querySelector('#choice9');
const playGameLinks = document.querySelector('.gameOpt__container');

const chooseX = document.querySelector('#xButton');
const chooseO = document.querySelector('#oButton');
const text = document.querySelector('#text');
const playText = document.querySelector('#play-text');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

const pickPos = [choice1, choice2, choice3, choice4, 
                choice5, choice6, choice7, choice8,
                choice9];

const xValue = "X";
const oValue = "O";
let clickX = false;
let clickO = false;
let isThereWinner = false;
let checkResp = false;
let player = 0;


yesBtn.addEventListener('click', () => {
    playGameLinks.classList.toggle('active');
    chooseO.removeAttribute('disabled');
    chooseX.removeAttribute('disabled');
    text.innerText = "";
    isThereWinner = false;
    player = 0;
    for(let i = 0; i < pickPos.length; i++){
        pickPos[i].innerText = "";
    }
});

noBtn.addEventListener('click', () => {
    window.close();
})

function chooseVal(){
    for(let i = 0; i < pickPos.length; i++){
        const setValue = () => {
            if(clickX){
                pickPos[i].innerText = xValue; 
            }
            else if(clickO){
                pickPos[i].innerText = oValue;
            }
            checkStatus();
            winMessage();
        }
        pickPos[i].addEventListener('click', setValue);
    }
    player += 1;
}

function winMessage(){
    if((player%2) == 1 && isThereWinner){
        text.innerText = "Player one Won!";
    }
    else if((player%2) == 0 && isThereWinner){
        text.innerText = "Player two Won!";
    }
}

const playAgain = () => {
    setTimeout(() => {
        playGameLinks.classList.toggle('active');
        playGameLinks.classList.remove('active');
        playText.innerText = "Play Again?";
    }, 1000);
}

const checkStatus = () => {
    const i1 = pickPos[0].innerText;
    const i2 = pickPos[1].innerText;
    const i3 = pickPos[2].innerText;
    const i4 = pickPos[3].innerText;
    const i5 = pickPos[4].innerText;
    const i6 = pickPos[5].innerText;
    const i7 = pickPos[6].innerText;
    const i8 = pickPos[7].innerText;
    const i9 = pickPos[8].innerText;

    if(i1 == xValue || i1 == oValue){
        if((i1 == i2 && i1 == i3) || (i1 == i4 && i1 == i7)){
            isThereWinner = true;
            playAgain();
        }
    } 
    if(i9 == xValue || i9 == oValue){
        if((i9 == i7 && i9 == i8) || (i9 == i3 && i9== i6)){
            isThereWinner = true;
            playAgain();
        }
    } 
    if(i5 == xValue || i5 == oValue){
        if((i5 == i2 && i5 == i8) || (i5 == i4 && i5== i6)){
            isThereWinner = true;
            playAgain();
        }
    } 
    if(i5 == xValue || i5 == oValue){
        if((i5 == i1 && i5 == i9) || (i5 == i3 && i5== i7)){
            isThereWinner = true;
            playAgain();
        }
    }
    if(player === 9 && isThereWinner === false){
        text.innerText = "No one wins. Nice game!";
        playAgain();
    }
}

chooseX.addEventListener('click', () => {
    clickX = true;
    clickO = false;
    chooseVal();
    chooseX.setAttribute('disabled', 'disabled');
    chooseO.removeAttribute('disabled');
});
chooseO.addEventListener('click', () => {
    clickO = true;
    clickX = false;
    chooseVal();
    chooseO.setAttribute('disabled', 'disabled');
    chooseX.removeAttribute('disabled')
});
