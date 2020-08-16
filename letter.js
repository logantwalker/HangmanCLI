class Letter {
    constructor(char){
        this.char = char;
        this.visible = !/[a-z1-9]/i.test(char);
    }
    toString(){
        if(this.visible){
            return this.char
        }
        const placeholder = '_'
        return placeholder;
    }
    guess(g){
        if(g === this.char){
            this.visible = true;
        }
    }
    getSolution(){
        return this.char;
    }
}


module.exports = Letter;