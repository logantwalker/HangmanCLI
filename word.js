Letter = require('./letter');

class Word {
    constructor(word){
        this.word = this.letterfy(word);
    }
    letterfy(input){
        let output=[];
        for(let i=0; i < input.length; i++){
            output.push(new Letter(input[i]));
        }
        return output;
    }
    
}

const newWord = new Word("testing!");




