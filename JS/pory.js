let poryEl = document.getElementById('pory');
let poryZEl = document.querySelector('body');
let tudoEl = document.querySelectorAll('.tema-claro-escuro');
let entrePgs = 2;

function poryTheme() {
    if (entrePgs == 1){
        $(poryZEl).css('background-image', 'url(imgs/pory-base.png)');
        $(poryZEl).css('background-color', 'rgb(255, 255, 255)');
        entrePgs = 2;
        trocaCor(1);
    }
    else{
        $(poryZEl).css('background-image', 'url(imgs/474-porygon-z-g.png)');
        $(poryZEl).css('background-color', 'rgb(0, 0, 0)');
        entrePgs = 1;
        trocaCor(2);
    }

}


$(poryEl).click(poryTheme);

function trocaCor(num){
    tudoEl.forEach(letras => {
        if (num == 1)
            $(letras).css('color', 'rgb(0, 0, 0)'); 
        else
            $(letras).css('color', 'rgb(255, 255, 255)');
    });
}

function ativarPorygon() {
    if(entrePgs == 1)
        poryTheme();
    else
        poryTheme();


}

window.addEventListener('load', ativarPorygon);
