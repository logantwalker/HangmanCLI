const wordBank = ["community","right","fat","young","fuel","aside","television","purpose","cutting","frequently"
,"section","job","there","late","reason","equal","read","package","moon","manufacturing"
,"heart","find","disappear","clock","writer","pride","stock","corner","get","gentle"
,"occur","general","arrangement","quite","ever","forgot","afternoon","courage","pony","make"
,"whose","definition","volume","blow","exchange","run","reach","language","accept","badly"
,"mouse","five","shown","alone","volume","rod","fighting","rise","locate","locate"
,"opposite","from","nation","union","terrible","piano","successful","turn","touch","chapter"
,"western","draw","thy","horse","ground","gather","closely","reach","remarkable","customs"
,"lonely","meet","among","sheet","brick","vapor","bound","speak","fourth","fair"
,"nodded","task","week","flies","reader","tired","bank","still","spider","seven"
,"molecular","opposite","she","hungry","most","away","present","mother","never","state"];


const inquirer = require('inquirer');
const Word = require('./word')


const gameWord = () =>{
    let index = Math.floor(Math.random()*wordBank.length);
    let output = wordBank[index];

    let wordPlayed = new Word(output);
    console.log(wordPlayed.word + '');
    return wordPlayed;
}

//setting the word to play with from word bank and initializing the "health" of the player
const currentWord = gameWord();
var health = 5;


inquirer.prompt([{
        type: 'list',
        message: 'Would you like to play a game of hangman?',
        choices:['yes','no'],
        name: 'ans'
    }]).then(r =>{
        if(r.ans === 'yes'){
            promptMachine(currentWord);
        }
        else{
            return console.log('See you later!');
        }
}).catch(err => {console.log(err)});

const promptMachine = (w) =>{
    console.log(w.word + '');
    if(health > 0){
        inquirer.prompt([{
            type: 'input',
            message: 'Enter your guess:',
            name: 'ans'
        }]).then(r =>{
            letterInspector(w,r);
        }).catch(err => {console.log(err)});
    }
    else{
        return console.log('You Lose!!');
    }
}

const letterInspector = (w,r) =>{
    let char = r.ans;
    let inspector = w.guessLetter(char);

    if(inspector){
        console.log('Correct!');
    }
    else{
        health--;
        console.log('Incorrect!');
    }

    let inspectorGeneral = w.guessedCorrectly();
    if(inspectorGeneral){
        return console.log('You Win!')
    }
    else{
        promptMachine(w);
    }
}





