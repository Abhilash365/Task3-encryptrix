let scre=document.getElementById('scr');
let count=0;
let num=1;
function show(i){
    scre.innerHTML+=i;
}
function showN(i){
if(count==0){
    scre.innerHTML+=i;
}
    else if(count==1){
        scre.innerHTML='';
        scre.innerHTML=i;
        count=0;
       
    }
}

function clr(){
    scre.innerHTML='';
}

function minus1(){
    scre.innerHTML=scre.innerHTML.slice(0,-1);
}

function calci(i){
    try{
        scre.innerHTML=eval(scre.innerHTML);
        count=1;
    }
    catch(err){
        scre.innerHTML='Error';
    }
    }
    