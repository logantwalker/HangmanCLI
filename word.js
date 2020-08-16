Letter = require('./letter');

class Word {
    constructor(word){
        this._word = word;
        this.word = this.letterfy(word);
    }
    letterfy(input){
        let output=[];
        for(let i=0; i < input.length; i++){
            output.push(new Letter(input[i]));
        }
        return output;
    }
    guessLetter(input){
        if(input.length > 1){
            return console.log("Please only enter single characters!");
        }
        else{
            if(this._word.includes(input)){
                let index = this._word.indexOf(input);
                this.word[index].visible = true;
                this.guessedCorrectly();
                return true;
            }
            else{
                return false;
            }
        }
        
    }
    guessedCorrectly(){
        let boolArr = [];
        for(const item of this.word){
            if(item.visible){
                boolArr.push(item.visible)
            }
            else{
                return false;
            }

        }
        if(boolArr.length === this.word.length){
            return true;
        }
    }
    
}

module.exports = Word




