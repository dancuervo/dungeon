//imports//imports
import dungeonStorage from './dungeon_storage.js';
import dungeon_character from './dungeon_character.js';
import diceRoller from './dice.js';
import * as dialog from './dungeon_dialogs.js';
  
    //init

    dungeonStorage();

    /* roll character attributes on CLICK*/

    let roll = document.querySelector('#roll');
    roll.addEventListener('click', function(){
        
        let dice = document.querySelectorAll('.dice');
        let diceL = dice.length;

        
        for( let i = 0; i < diceL; i ++ ){
        
            dice[i].innerHTML = diceRoller(6);
                        
        }

        roll.disabled = true;
        roll.style.backgroundColor = 'grey';

    });

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
        
        /* Narrator Speech 
        text resuming character data
        Button continue
        */
       
        texto.innerHTML = dialog.Greetings(nameChar, raceChar);

        let adventure = document.querySelector('#adventure');
        //old wizard
        let image = document.createElement('img');
        image.setAttribute('src', 'old_mage.jpg');
        adventure.appendChild(image);

        //button aventure-se
        let btn = document.createElement('button');
        let text = document.createTextNode('Adventure-se!');
        let p = document.createElement('p');

        btn.setAttribute('onclick', 'location.reload();');

        btn.appendChild(text);
        p.appendChild(btn);
        adventure.appendChild(p);

        
    });