let tela = document.getElementById("tela");
let qtd = 0;
let qtdPoint = 0;
let qtdOperation = 0;
let operation;

function simbolAdd(){
    if(qtdOperation < 5){
        operation = "+";
        qtdOperation += 1;
        tela.innerText += "+";
    }
}
function simbolMulti(){
    if(qtdOperation < 5){
        operation = "*";
        qtdOperation += 1;
        tela.innerText += "*";
    }
}

function simbolSub(){
    if(qtdOperation < 5){
        operation = "-";
        qtdOperation += 1;
        tela.innerText += "-";
    }  
}

function simbolDiv(){
    if(qtdOperation < 5){
        operation = "/";
        qtdOperation += 1;
        tela.innerText += "/";
    }
}

function simbolPoint(){
    if(qtdPoint < 2){
        tela.innerText += ".";
        qtdPoint += 1;
    }   
}

function calcular(){
    if(operation != undefined){
        const tel = document.getElementById("tela").innerHTML;
        let calc = eval(tel);
        tela.innerText = calc;
    }
    else{
        tela.innerText = "ERROR!";
    }
    
}

function numberOne(){
    if(qtd < 8){
        tela.innerText += 1;
        qtd += 1;
    }
}
    
function numberTwo(){
    if(qtd < 8){
        tela.innerText += 2;
        qtd += 1;
    }
}
    
function numberThree(){
    if(qtd < 8){
        tela.innerText += 3;
        qtd += 1;
    }
}
    
function numberFour(){
    if(qtd < 8){
        tela.innerText += 4;
        qtd += 1;
    }

}
    
function numberFive(){
    if(qtd < 8){
        tela.innerText += 5;
        qtd += 1;
    }
    
}
    
function numberSix(){
    if(qtd < 8){
        tela.innerText += 6;
        qtd += 1;
    }
}
    
function numberSeven(){
    if(qtd < 8){
        tela.innerText += 7;
        qtd += 1;
    }
}
    
function numberEight(){
    if(qtd < 8){
        tela.innerText += 8;
        qtd += 1;
    }
}
    
function numberNine(){
    if(qtd < 8){
        tela.innerText += 9;
        qtd += 1;
    }
}
    
function numberZero(){
    if(qtd < 8){
        tela.innerText += 0;
        qtd += 1;
    }
}

function limpar(){
    tela.innerHTML = null;
    operation = undefined;
    qtd = 0;
    qtdOperation = 0;
    qtdPoint = 0;
}