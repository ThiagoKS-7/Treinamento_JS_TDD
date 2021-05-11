$(function(){

    $(".ev1").each(function(){
        let place = $(this).attr("title");
        let input = $(this);

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

function multiplicacao(){
    let n1 = document.querySelector("input").value;
    n1 = parseInt(n1);
    let result = Math.pow(n1,2);
    $(".ex1").text(`Resultado: ${result}`);
    console.log(`Resultado: ${result}`)
}