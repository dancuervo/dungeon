//import or create dungeon_save
(function(){

    let dungeon;

    if(localStorage.getItem('dungeon_save')){
        
        dungeon = JSON.parse(localStorage.getItem('dungeon_save'));
    
    } else {

       let dungeon_save = localStorage.setItem('dungeon_save' , JSON.stringify('save'));
 
        dungeon = localStorage.getItem('dungeon_save');

    }    

})();