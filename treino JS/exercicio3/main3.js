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

function averiguar(){
    let n1 = document.querySelector(".ev1").value;
    console.log(n1);
    n1 = parseInt(n1);
    console.log(n1);
    if(n1 >= 0) {
        $(".ex1").text("Esse número é positivo");
        console.log("Esse número é positivo");
    } else {
        $(".ex1").text("Esse número é negativo");
        console.log("Esse número é negativo"); 
    }
}