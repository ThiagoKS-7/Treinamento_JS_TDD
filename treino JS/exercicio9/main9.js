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



function filtro_respostas(n1,n2){
    return n1 && n2 == "sorrindo" || n1  && n2 == "não está" || n1=="não está" && n2=="sorrindo"|| n1=="sorrindo"
    && n2=="não está"

}


function averiguar(){
    let n1 = document.querySelector(".ev1").value;
    let n2 = document.querySelector(".ev2").value;
    // filtrar respostas possíveis
    if(filtro_respostas(n1,n2)){

        if(n1 != n2){
            $(".ex1")
                .css("background", "green")
                .text("Resultado: Não estão brigando :)");
            console.log("Resultado: Não estão brigando :)");
            console.log("m1: "+n1+" m2: "+n2);
        }
        else{
            $(".ex1")
                .css("background", "red")
                .text("Resultado: Vish, estão brigando :/");
            console.log("Resultado: Vish, estão brigando :/");
            console.log("m1: "+n1+" m2: "+n2);
        }
        
        
    } 
    else {
        $(".ex1")
                .css("background", "orange")
                .text("Resultado: Oops! humor(es) não condiz(em) com o enunciado :/");
    }
    
}

