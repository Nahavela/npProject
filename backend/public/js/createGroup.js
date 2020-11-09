
module.exports = {
    split:
function splitTeams(names, teams_count) {
    let teams = [];
    let names2 = [...names]
    
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    shuffle(names2);

    while (teams_count > 0) {
    teams.push(names2.splice(0, Math.floor(names2.length/teams_count)))
    teams_count--;  
    }

    return teams
    
},

createMatch:


function createSchedule(array){
    let array2 = []
    let array3 = []
    for (i=0;i<array.length;i++){
        
    for (k=1,j=0;k<=array[i].length,j<array[i].length;k++){
        if (k==array[i].length){
            j++;
            k = 0+j
        }else{if( j != k) {
            let arr= [array[i][j]];
            arr.push(array[i][k]);
            array2.push(arr)
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
            }
            shuffle(array2);

        }}
    } array3.push(array2)
    array2 = []
    


    }
    return array3
},

createTeam:
function createteam(array1){
    let arr =[];
    for (i=0; i<array1.length; i++){
        let name = array1[i]
        label={
            point:0,
			victory:0,
			lost:0,
			egal:0,
        }
        const obj = Object.assign({name}, label);
        arr.push(obj)}

    const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
        }, initialValue);
    };
    let objectFini =convertArrayToObject(arr,'name');
    return objectFini
},

}




