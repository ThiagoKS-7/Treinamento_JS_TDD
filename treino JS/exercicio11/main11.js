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



function pitagoras(){
    let n1 = document.querySelector(".ev1").value;
    let n2 = document.querySelector(".ev2").value;
    let catetos = parseInt(Math.pow(n1,2)) + parseInt(Math.pow(n2,2));
    let result = Math.sqrt(catetos);
    $(".ex1")
        .css("background","green")
        .text(`Resultado: ${result}`);
    console.log(`Resultado: ${result}`);
    
}
