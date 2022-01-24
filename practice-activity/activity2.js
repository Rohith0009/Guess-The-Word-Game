function back(){
    window.location.replace("activity_1.html");
}

function getscore(){
    score = localStorage.getItem("Score");
    document.getElementById("update").innerHTML = "Score: "+score
}