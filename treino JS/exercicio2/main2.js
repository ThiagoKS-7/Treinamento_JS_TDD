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



function multiplicacao(){
    let n1 = document.querySelector(".ev1").value;
    let n2 = document.querySelector(".ev2").value;
    let sum = parseInt(n1) + parseInt(n2)
    let result = Math.pow(sum,2);
    $(".ex1").text(`Resultado: ${result}`);
    console.log(`Resultado: ${result}`);
    
}
