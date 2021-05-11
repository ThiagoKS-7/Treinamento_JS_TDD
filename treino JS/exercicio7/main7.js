$(function(){

    $(".ev1").each(function(){
        let place = $(this).attr("title");
        let  input = $(this);

        input
            .val(place)
            .css("color", "#ccc")
            .focusin(function(){
                input.css("color", "#000");
                if (input.val() == place) {
                    input.val('');
                }
            }).focusout(function(){
                if (input.val() == ('')){
                    input.css("color", "#ccc")
                    input.val(place);
                }
            });

    });
});

let  i = 0;
let  maior = array1 = [];
let  menor = array2 = [];

function criarArray(){
    let n1 = document.querySelector(".ev1").value;

    if (n1 != NaN && array1.length < 10){
        n1 = parseInt(n1);
        array1.push(n1);
        console.log(array1);  
        $(".ex1")
        .css("background","green")
        .text(`Array1: ${array1}`);
    } else {
        $(".ex1")
            .css("background","orange")
            .text("Limite de números atingido. Clique em Enviar");
    }
}
function averiguar(){
    array1.forEach(element =>{
        console.log("Entrada:"+ element);
        console.log("Anterior: "+array2[i-1]);
        console.log(i);
        array2.push(element);
        if ((i-1) == -1){
            maior[0] = element;
            i +=1;
            console.log(maior);
        } else {      
            if(maior[0] < element) {
                 maior[0] = element;
                i +=1;
            } 
            else if(menor[0] > element) {
                 menor[0] = element;
                i+=1;
            }  
            else {
                i+=1;
            }
    
            $(".ex1")
                .css("background","green")
                .text(`Maior: ${maior[0]} Menor: ${menor[0]}`);
    
            console.log(`Maior: ${maior[0]}`);
            console.log(`Menor: ${menor[0]}`);
        }
    });
}

