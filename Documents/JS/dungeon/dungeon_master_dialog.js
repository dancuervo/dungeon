
//dungeon master dialogs

let dungeon_master = function(){

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


}
