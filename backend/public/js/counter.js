count="0"+0,count1=0,count2=0,w1=0,w2=0;
let history = ["0"];
let historyorder = ["C"];
let m = tournament.numberOfPoint;


    function player1()
    {
        let m = tournament.numberOfPoint;
        
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
            sendResults();
            reset();
            
        }
        
    }
    function player2()
    {

    let m = tournament.numberOfPoint;
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
            sendResults();
            reset();
        }
    }
    function reset()
    {

        document.getElementById("inc1").innerHTML=count;
        document.getElementById("inc2").innerHTML=count;
        count1=0,count2=0;
        history = ["0"];
        historyorder = ["C"];
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
        } else if (historyorder[historyorder.length - 1]=="B"){
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
    function sendResults()
    {  
        
        if (count1 == m) {

            document.getElementById("winA").value = parseInt(document.getElementById("winA").value)+1;
            document.getElementById("lostA").value = parseInt(document.getElementById("lostA").value)+0;
            document.getElementById("lostB").value = parseInt(document.getElementById("lostB").value)+1;
            document.getElementById("winB").value = parseInt(document.getElementById("winB").value)+0;
            document.getElementById("2winB").value = parseInt(document.getElementById("winB").value);
            document.getElementById("2lostB").value = parseInt(document.getElementById("lostB").value);
            document.getElementById("1lostA").value = parseInt(document.getElementById("lostA").value);
            document.getElementById("1winA").value = parseInt(document.getElementById("winA").value);
        } else if (count2 == m) {
            document.getElementById("winB").value = parseInt(document.getElementById("winB").value)+1;
            document.getElementById("lostB").value = parseInt(document.getElementById("lostB").value)+0;
            document.getElementById("lostA").value = parseInt(document.getElementById("lostA").value)+1;
            document.getElementById("winA").value = parseInt(document.getElementById("winA").value)+0;
            document.getElementById("2winB").value = parseInt(document.getElementById("winB").value);
            document.getElementById("2lostB").value = parseInt(document.getElementById("lostB").value);
            document.getElementById("1lostA").value = parseInt(document.getElementById("lostA").value);
            document.getElementById("1winA").value = parseInt(document.getElementById("winA").value);
        }
        


        document.getElementById("resultAB").style.display="block";
        
        document.getElementById("resultA").innerHTML=count1;
        document.getElementById("resultB").innerHTML=count2;
        document.getElementById("resultIA").value=count1;
        document.getElementById("resultIB").value=count2;
        document.getElementById("1resultIA").value=parseInt(document.getElementById("1resultIA").value)+count1;
        document.getElementById("2resultIB").value=parseInt(document.getElementById("2resultIB").value)+count2;
        document.getElementById("result0").value=`${count1}-${count2}`;
        

    }

    function hide()
    {
        document.getElementById("resultAB").style.display="none";

      
    }
    submitForms = function(){

        document.getElementById("form1").submit();
    }