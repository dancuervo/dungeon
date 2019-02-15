// 1 - import or create dungeon_save

 let dungeonStorage = function(){

    let dungeon;

    if(localStorage.getItem('dungeon_save')){
        
        dungeon = JSON.parse(localStorage.getItem('dungeon_save'));
    
    } else {

       let dungeon_save = localStorage.setItem('dungeon_save' , JSON.stringify('save'));
 
        dungeon = localStorage.getItem('dungeon_save');

    }

    return dungeon;
 }

 export default dungeonStorage;
