let gameseq=[];
let userseq=[]; 
let started=false;
let level=0;
let highest=0;
let btns=["yellow","red","purple","blue"];
let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let index=Math.floor(Math.random()*4);
    let rand=btns[index];
    let clr=document.querySelector(`.${rand}`);
    // console.log(index);
    // console.log(rand);
    // console.log(clr);
    gameseq.push(rand);
    console.log(gameseq);
    btnflash(clr);
}
function checkans(ind){
    // let ind=level-1;
    if(userseq[ind]==gameseq[ind]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br>Press any key to start`;
        if(level>highest){
            highest=level;
        }
        h4.innerHTML=`Highest Score:${highest-1}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="wheat";
        },150)
        reset();
    }
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    userclr=btn.getAttribute("id"); 
    userseq.push(userclr);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}