$(function(){

    $(".place").each(function(){
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


//20000 = 100%
//13000 = x
function regraD3(){
    let n1 = document.querySelector(".ev1").value;
    let n2 = document.querySelector(".ev2").value;
    let sub = parseInt(n1) - parseInt(n2)
    let mult = sub * 100;
    let result = mult / n1;
    $(".ex1").text(`Falta pagar: ${result}% da dívida.`);
    console.log(`Falta pagar: ${result}% da dívida.`);
    
}
