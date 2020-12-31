function sing()
{
    const firstWord = 'Let it be';
    const secondWord = 'words of wisdom';
    const thirdWord = 'there will be an answer';
    var result = '';
    for(var i = 0; i < 12; i++){
         
        if(result === ''){
            result = firstWord;
        }
        else {
            
            if(i === 4){
            result += ', ' + secondWord;
            }else if(i === 10){
                result += ', ' + thirdWord;
            }else {
                result += ', ' + firstWord;
            }
        }      	
    }
    return result;
}

//var myString = sing();
//Your code above ^^^

console.log(sing());