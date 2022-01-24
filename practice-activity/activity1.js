var score = 0

function updatescore(){
    score = score+1;
    document.getElementById("score").innerHTML = "Score: "+score;
}

function savescore(){
    localStorage.setItem("Score", score);
}

function nextpage(){
    window.location="activity_2.html"
}