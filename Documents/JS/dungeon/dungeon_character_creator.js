
import dungeon_character from './dungeon_character.js';


document.addEventListener('DOMContentLoaded', function(){
          
    /* roll character attributes on CLICK*/

    let roll = document.querySelector('#roll');
    roll.addEventListener('click', function(){
        
        let dice = document.querySelectorAll('.dice');
        let diceL = dice.length;

        for( let i = 0; i < diceL; i ++ ){
        
            dice[i].innerHTML = Math.floor(Math.random() * 6) + 1;
                        
        }

        roll.disabled = true;
        roll.style.backgroundColor = 'grey';

    });

    console.log(dungeon_character);

    /* select character name, race and attributes and save */
    let crear = document.querySelector('#crear');
    crear.addEventListener('click', function(){
       
        crear.disabled = true;
        crear.style.backgroundColor = 'grey';


       let strengthChar = document.querySelector('#strength').innerHTML;
       let inteligenceChar = document.querySelector('#inteligence').innerHTML;
       let dexteryChar = document.querySelector('#dextery').innerHTML;
       let nameChar = document.querySelector('#nome').value;
       let raceChar = document.querySelector('#raca').value;
       let textoChar = document.querySelector('#texto');

    /*
      write character stats, name and race in dungeon{}
    */

        dungeon_character.name                      = nameChar;
        dungeon_character.attributes.strength       = strengthChar;
        dungeon_character.attributes.inteligence    = inteligenceChar;
        dungeon_character.attributes.dextery        = dexteryChar;

        let dungeon_save = localStorage.setItem('dungeon_save' , JSON.stringify(dungeon_character));
 
        let resultado = localStorage.getItem('dungeon_save')? console.log('listo!') : console.log('shit!');

        resultado;


    
    /* Narrator Speech 
        text resuming character data
        Save stats in Dungeon jSON
        Button continue
    */
       texto.innerHTML = `Saudações ${nameChar}. Você não é o primeiro ${raceChar} a se aventurar pelo mundo...<br>
                          Entretanto, vejo algo especial em você...<br>
                          Que seu nome seja lembrado!`

        let adventure = document.querySelector('#adventure');
        //old wizard
        let image = document.createElement('img');
        image.setAttribute('src', 'old_mage.jpg');
        adventure.appendChild(image);
        //button aventure-se
        let btn = document.createElement("button");
        let text = document.createTextNode("Adventure-se!");
        let p = document.createElement('p');

        btn.appendChild(text);
        p.appendChild(btn);
        adventure.appendChild(p);

        
    });
    
});