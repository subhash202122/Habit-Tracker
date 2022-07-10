//function to toggle the states of the habit 
async function toggleState(date, habit_id) {
    let nextState = await fetch('/togglestate', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            habit_id: habit_id,
            date: date
        })
    });
    
    let nextStateJson = await nextState.json();
    if (nextStateJson.status != 'error') {
        if (nextStateJson.state == 'done') {
            document.getElementById(date).style.backgroundColor = "#5666F3";
            document.getElementById(date).style.color = "white";
        }
        else if(nextStateJson.state=='notdone'){
            
            document.getElementById(date).style.backgroundColor = "red";
            document.getElementById(date).style.color = "white";
            document.getElementById(date).style.border = "1.5px solid red";
        }
        else{
            document.getElementById(date).style.backgroundColor = "transparent";
            document.getElementById(date).style.color = "#5666F3";
            document.getElementById(date).style.border = "1.5px solid #5666F3";
        }
    }

}