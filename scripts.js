const botoes = document.querySelectorA11 ("button");


botoes.forEach(function (botao)){
    let curtiu = false;
    botao.addEventsListener("click", botaoClicado);
    function botaoClicado(){
        console.log ("fui clicado");
        let texto = botao.querySelector ("span");
        if (curtiu === false){
            texto.textContent++;
            curtiu = true;
        } else

    }
}