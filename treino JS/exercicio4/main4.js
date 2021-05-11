$(function(){

    $(".ev1").each(function(){
        var place = $(this).attr("title");
        var input = $(this);

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

let array1 = [];
let array2 = [];

function criarArray(){
    let n1 = document.querySelector(".ev1").value;

    if (n1 != NaN && array1.length < 10){
        n1 = parseInt(n1);
        array1.push(n1);
        console.log(array1);  
    } else {
        $(".ex1")
            .css("background","orange")
            .text("Limite de números atingido. Clique em Enviar");
    }


    
}

function averiguar(){
    array1.forEach(element =>{
        let result = element * 2;
        array2.push(result);
        console.log(`Valor: ${result}`);
    });
    $(".ex1")
        .css("background","green")
        .text(`Resposta: ${array2}`);
}
