var Dice = new Array(5);


//rolls and stores dice results
function rollDice(min,max){
    
    var i=0;
    var result;
        while(i<5){
            result = min + Math.floor(Math.random() * (max-min+1));
            Dice[i] = result;
            console.log(result);
        }

}