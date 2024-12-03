//VARIAVEL GLOBAL
const visor = document.getElementById("resultado")


function insert(num) {
    visor.textContent += num;
}


function clean() {
   visor.textContent = "";
}

function back() {
    let numerovisor = visor.textContent;

    visor.textContent = numerovisor.substring(0,numerovisor.length -1);

}

function calcular() {

    let calculo = visor.textContent;

   if(calculo.length > 2) {
    
       visor.style.color =  'green';
       visor.textContent = eval(calculo);
       
    } else {
        
        visor.textContent = "Error!";
        visor.style.textAlign = 'center';
        visor.style.color = 'red';
        
        setTimeout(() => {
            clean();
            visor.style.color = '#000';
            visor.style.textAlign = 'right'

        },1000);
    }
}

