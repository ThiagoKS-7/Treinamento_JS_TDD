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

function raiz(){
    let n1 = document.querySelector("input").value;
    let result = Math.sqrt(n1);
    $(".ex1")
        .css("background","green")
        .text(`Resultado: ${result}`);
    console.log(`Resultado: ${result}`)
}