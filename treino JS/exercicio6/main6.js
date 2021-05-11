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



function media(){
    let n1 = document.querySelector(".ev1").value;
    let n2 = document.querySelector(".ev2").value;
    let n3 = document.querySelector(".ev3").value;

    let sum = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    console.log(sum);
    let result = sum/3;
    if(result >= 7){
        $(".ex1").text(`Resultado: ${result.toFixed(2)}`);
        $(".ex2")
            .css("background", "green")
            .text("Aprovado! :)");

    console.log(`Resultado: ${result.toFixed(2)}`);
    console.log("Aprovado! :)")
    } else {
        $(".ex1").text(`Resultado: ${result.toFixed(2)}`);
        $(".ex2")
            .css("background", "red")
            .text("Reprovado! :(");
            
    console.log(`Resultado: ${result.toFixed(2)}`);
    console.log("Reprovado! :(")
    }
    
    
}




  
