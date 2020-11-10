
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


function createMatch(array){
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


schedule :
function schedule(time, timOfMatch, timeBetweenMatch, numberOfMatch){

    let schedule = [];
    let numberMatch = numberOfMatch[0].length
    for (i=0;i<numberMatch;i++){
    
    
    let h = parseInt(time.slice(0, 2));
    let min = parseInt(time.slice(3, 5));
    let add = i*(timOfMatch+timeBetweenMatch);
    let hours = Math.floor(add / 60);          
    let minutes = add % 60;
    
    h += hours;
    min += minutes;
    if (min>59){
        min= min-60
        h++
    }
    if (min<10){
        min = "0"+min
    }
    if (h>23){
        h = h-24
        if (h<10){
            h = "0"+h
        }
    } else if (h<10){
        h = "0"+h
    }
    let hour = h+":"+min
    schedule.push(hour)
    
    
    
    }return schedule
    },

}




