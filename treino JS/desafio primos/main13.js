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



function verificar(n1, divisíveis){
    if (n1 == 2) {
        $(".ex1")
            .css("background", "green")
            .text("É primo :)");
        console.log("É primo :)");
    } else if(divisíveis > 2){
        $(".ex1")
            .css("background", "red")
            .text("Não é primo :(");
        console.log("Não é primo :(");
    } else {
        $(".ex1")
            .css("background", "green")
            .text("É primo :)");
        console.log("É primo :)");
    }
}


function contaDivisiveis(n1){
    let div = 1;
    for(let i = 2; i <= n1; i++){
        if(n1 % i == 0) {
            div +=1;
        } 
        else{
        }
        console.log("div: "+div);
        verificar(n1,div);
        
    } 
}

function filtrarEexecutar(n1){
    if (n1 > 1) {
        contaDivisiveis(n1);
    } else {
        $(".ex1")
            .css("background", "orange")
            .text("Números menores que 1 não são considerados");
        console.log("Números menores que 1 não são considerados");
    }
}

function ePrimo(){
    let n1 = document.querySelector("input").value;
    n1 = parseInt(n1);
    filtrarEexecutar(n1);
       
}