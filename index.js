console.log("js running ")

// Datastructures
var score;
var cellStatus = [];
var bombcells = new Set();

//functions
function startGame()
{
    score=0;
    bombcells.clear();
    cellStatus = [];

    document.getElementById("mainSection").innerText="";
    let scoreEle = document.createElement("h2");
    scoreEle.id = "score";
    scoreEle.innerText = "Score :"+score;
    scoreEle.style.textAlign = "center";
    document.getElementById("mainSection").appendChild(scoreEle); 
    for(let i=0;i<81;i++){
        cellStatus.push(0);
    }
    generateRandom();
    let id=0;
    document.getElementById("mainSection").style.marginTop = "5em";
    for(let m=0;m<9;m++)
    {
        let row=document.createElement("div");
        row.className="row";
        for(let n=0;n<9;n++)
        {
            let col=document.createElement("div");
            col.className = "col";
            col.style.backgroundColor = "gray";
            col.style.border = "2px solid balck";
            col.style.height= "5em";
            col.id = id;
            id++;
            col.onclick = () => {
                updateScore(col.id);
            }
            row.appendChild(col);
        }
    }






}

startGame();