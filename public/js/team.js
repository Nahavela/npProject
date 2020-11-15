
function chooseteam(clicked_id) {
for (i=0; i<(document.getElementsByClassName("teamdiv").length); i++)
    if (document.getElementsByClassName("teamdiv")[i].id != clicked_id) {
      document.getElementsByClassName("teamdiv")[i].parentNode.style.display = "none";
      document.getElementById("choose").innerHTML = "Your team :"
    }
}


