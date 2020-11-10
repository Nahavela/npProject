function schedule(time, timOfMatch, timeBetweenMatch, numberOfTeam, numberOfGroup){

    let schedule = [];
    let numberOfMatch= (numberOfTeam/numberOfGroup);
    for (i=0;i<numberOfMatch;i++){
    
    
    let h = parseInt(time.slice(0, 2));
    let min = parseInt(time.slice(3, 5));
    let add = i*(parseInt(timOfMatch)+parseInt(timeBetweenMatch));
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
    
    schedule.push(h+":"+min)
    
   
    
    } console.log(schedule)
    return schedule
    }

    schedule("12:00", 5, 5, 12, 2)