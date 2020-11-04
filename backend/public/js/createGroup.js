
module.exports = {
    split:
function splitTeams(names, teams_count) {
    var teams = [];
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    shuffle(names);
    while (teams_count > 0) {
    teams.push(names.splice(0, Math.floor(names.length/teams_count)))
    teams_count--;
    }
    return teams
    
}


}