
//dice roller 'dice' gives the dice type (d4, d6 ...)

 let diceRoller = function (dice){

    return  Math.floor(Math.random() * dice) + 1;

}

export default diceRoller;