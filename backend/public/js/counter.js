count=0,count1=0,count2=0,w1=0,w2=0;
let history = ["0"];
let historyorder = ["C"];
    function player1()
    {
        let m = 25;
        count1+=1;   

        if (count1<10) {
            document.getElementById("inc1").innerHTML="0"+count1;
            history.push(count1);
            historyorder.push("A")
            

        }
        if (count1>=10) {
            document.getElementById("inc1").innerHTML=count1;
            history.push(count1);
            historyorder.push("A")
            

        }
        if (m==count1)
        {
            alert("The game is finished !!");
            reset();
            
        }
        
    }
    function player2()
    {

    let m = 25;
    count2+=1;   
        if (count2<10) {
            document.getElementById("inc2").innerHTML="0"+count2;
            history.push(count2);
            historyorder.push("B")
            
            

        }
        if (count2>=10) {
            document.getElementById("inc2").innerHTML=count2;
            history.push(count2);
            historyorder.push("B")
            

        }
        if (m==count2)
        {
            alert("The game is finished !!");
            reset();
        }
    }
    function reset()
    {

        document.getElementById("inc1").innerHTML=count;
        document.getElementById("inc2").innerHTML=count;
        count1=0,count2=0;
    }


    function undo(){

        if (historyorder[historyorder.length - 1]=="C"){}
        else if (historyorder[historyorder.length - 1]=="A"){
            if (history[history.length - 1]<=10) {
          
                document.getElementById("inc1").innerHTML="0"+(history[history.length - 1]-1);
                history.pop();
                historyorder.pop();
                count1-=1;


            }
            else if (history[history.length - 1]>10) {
             
                document.getElementById("inc1").innerHTML=history[history.length - 1]-1;
                history.pop();
                historyorder.pop();

                count1-=1;
            }
        }else if (historyorder[historyorder.length - 1]=="B"){
            if (history[history.length - 1]<=10) {
    
                document.getElementById("inc2").innerHTML="0"+(history[history.length - 1]-1);
                history.pop();
                historyorder.pop();

                count2-=1;
        }
            else if (history[history.length - 1]>10) {
 
                document.getElementById("inc2").innerHTML=history[history.length - 1]-1;
                history.pop();
                historyorder.pop();

                count2-=1;  
            }
        }  
    }


let array = ["a","b","c","d","e","f"];

let array2 = []
for (i=1,j=0;i<=array.length,j<array.length;i++){
    if (i==array.length){
        j++;
        i = 0+j
    }else{if( j != i) {
        let arr= [array[j]];
        arr.push(array[i]);
        array2.push(arr)
    }}


}
console.log(array2)

