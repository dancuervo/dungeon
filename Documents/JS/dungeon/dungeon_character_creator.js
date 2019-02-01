
document.addEventListener('DOMContentLoaded', function(){
          
    /* roll character attributes */
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
    
    /* select character name, race and attributes and save */
    let crear = document.querySelector('#crear');
    crear.addEventListener('click', function(){
       
        crear.disabled = true;
        crear.style.backgroundColor = 'grey';


       let strength = document.querySelector('#strength').innerHTML;
       let inteligence = document.querySelector('#inteligence').innerHTML;
       let dextery = document.querySelector('#dextery').innerHTML;
       let name = document.querySelector('#nome').value;
       let race = document.querySelector('#raca').value;
       let ficha = document.querySelector('#ficha');
    
    /* Greetings */
       ficha.innerHTML = `Saudações ${name}. Você não é o primeiro ${race} a se aventurar pelo mundo...<br>
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
    
    
    /*
    
    */
});