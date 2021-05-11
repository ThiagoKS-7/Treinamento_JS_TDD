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

function crivo(n) {
    const primos = [];
 
    for (let i = 0; i <= n; i+=1) primos[i] = i;
    
    primos[0] = primos[1] = 0;
    
    let limit = ~~Math.sqrt(n);
    
    for (let i = 2; i <= limit; i+=1) {
      if (primos[i]) {
        for (let j = i * i; j <= n; j += i) primos[j] = 0;
      }
    }
    
    return primos;
  }

function cemPrimos(){
    let n1 = document.querySelector(".ev1").value;
    n1 = parseInt(n1);
    const text = crivo(n1)
    .map((i) =>`${i}\t`)
    .join(',');
        $(".ex1")
        .css("background", "green")
        .text(`Primos de 1 a ${n1}:\n [${text}]\n`);
        console.log(`Primos de 1 a ${n1}:\n [${text}]\n`);

}




