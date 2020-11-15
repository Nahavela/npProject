const options = { hour : "2-digit", minute: "2-digit" };
let today = new Date()

let texte = today.toLocaleTimeString('fr-FR', options)
//document.getElementById("target").innerHTML = texte;


let schedule = document.getElementsByClassName("target")

let arr = [...schedule];
for (i=0;i<arr.length;i++){
let e = arr[i].innerHTML;

let h = parseInt(e.slice(0, 2));
let min = parseInt(e.slice(3, 5));
let add = e.slice(5);
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


document.getElementsByClassName("target")[i].innerHTML = h+":"+min;


}
for (i=0;i<arr.length;i++){

    let heureActuelle = parseInt(texte.slice(0, 2));
    let minuteActuelle =  parseInt(texte.slice(3, 5));
    let heure = parseInt(arr[i].innerHTML.slice(0, 2));
    let minute = parseInt(arr[i].innerHTML.slice(3, 5));
    let tpsActuel= heureActuelle*60 + minuteActuelle;
    let tps = heure*60 + minute;
    if (i != arr.length-1){
    let heurePlusUn = parseInt(arr[i+1].innerHTML.slice(0, 2));
    let minutePlusUn = parseInt(arr[i+1].innerHTML.slice(3, 5));
    let tpsPlusUn = heurePlusUn*60 + minutePlusUn;
        if (
                
                (tpsActuel>=tps)&&(tpsActuel<tpsPlusUn)
                    
          
            ){
                //document.getElementsByClassName("target")[i].parentNode.parentNode.style.backgroundColor = "rgba(206, 204, 100, 0.1)" ;
                document.getElementsByClassName("target")[i].parentNode.parentNode.style.boxShadow= "0px 0px 5px 4px rgba(231,166,26,0.45)";}
    }else{
        if (
            (tpsActuel>=tps)
            ){
        //document.getElementsByClassName("target")[i].parentNode.parentNode.style.backgroundColor = "rgba(206, 204, 100, 0.1)" ;
        document.getElementsByClassName("target")[i].parentNode.parentNode.style.boxShadow= "0px 0px 5px 4px rgba(231,166,26,0.45)";}}
}

