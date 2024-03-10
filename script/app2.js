
let gameSequence=[];
let userSequence=[];
let scores=[];

let btns=["green","red","yellow","blue"];


let started=false;
let level=0;

let h3=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

   levelUp();
    
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
   
    console.log("button flash");
    
  setTimeout(function(){
        btn.classList.remove("flash");
    },200);
   
}

 function levelUp(){
    userSequence=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    gameSequence.push(randomColor);
    console.log("gameseq" ,gameSequence)
    let randomBtn=document.querySelector(`#${randomColor}`);
    
    btnFlash(randomBtn);

 }
 function checkAns(index){
    // let index=level-1;
    console.log(`curr level ${level}`);
    
    if(userSequence[index]===gameSequence[index]){
        console.log(userSequence[index]+"="+gameSequence[index])
        if(userSequence.length==gameSequence.length){
        setTimeout(levelUp(),2000);
        }    
    }
    else{
            h3.innerText=`Game Over! Press any to start.Your score is ${level} `;
           
           
           let b=document.querySelector("body");
           b.style.backgroundColor="red";
           console.log(b);
           setTimeout(function(){
            b.style.backgroundColor="black";
      
           },150);
           displayScore(level);
        
          
           reset();
          
       
    }  
}  

function displayScore(level){
      
           scores.push(level);
           console.log("score",scores);
           let highest=0;
           
           for(let score=0;score<=scores.length; score++){
            
            if(highest < scores[score]){
                
                highest=scores[score];
                console.log("highest",highest);
                
            }
}
             let h3=document.querySelector("h3");
                h3.innerText=highest;
}
 
 function btnPress(){
  
     console.log(this);
      let btn=this;
      btnFlash(btn);

      let userColor=btn.getAttribute("id");
      console.log(userColor);
      userSequence.push(userColor);
      console.log("userseq",userSequence);
      checkAns(userSequence.length-1);

}
 


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}