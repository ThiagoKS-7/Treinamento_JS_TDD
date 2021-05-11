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



function bhaskara(){
    let n1 = document.querySelector(".ev1").value;
    let n2 = document.querySelector(".ev2").value;
    let n3 = document.querySelector(".ev3").value;
    equacao(n1,n2,n3);
    
}

function delta(a,b,c){
     let result = Math.pow(b,2) - (4 *a) * c;
    console.log("Delta: " +result);
    return result
}


  
function equacao(a,b,c) {
    if (delta(a,b,c) > 0) {
        let raiz1 = (-b + Math.sqrt(delta(a,b,c)))/ 2;
        let raiz2 = (-b - Math.sqrt(delta(a,b,c)))/ 2;
        $(".ex1").text(`Resultado: Raíz A: ${raiz1}; Raíz B: ${raiz2}`);
        console.log(`Resultado: Raíz A: ${raiz1} Raíz B: ${raiz2}`);
        $(".ex2")
            .css("background","green")
            .text(`Resultado: x = (${raiz1},${raiz2})`);
    } else if (delta(a,b,c) == 0) {
        raiz1 = (-b + Math.sqrt(delta(a,b,c)))/ 2;
        $(".ex1").text(`Resultado: Raíz A: ${raiz1}`);
        console.log(`Resultado: Raíz A: ${raiz1}`);
        $(".ex2")
            .css("background","green")
            .text(`Resultado: x = ${raiz1}`);
    } else if (delta(a,b,c) < 0){
        $(".ex1").text("Resultado: Não possui raíz real");
        console.log("Resultado: Não possui raíz real (parábola não intersecta o eixo x");
        $(".ex2")
            .css("background", "orange")
            .text("Resultado: x ɇ R");

    } else {
        $(".ex1").text("Erro 0_o");
        console.log("Erro: Algo não está certo :(");
        $(".ex2")
            .css("background", "erro")
            .text("Erro 0_o");
    }
}
