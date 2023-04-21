let play = document.getElementById(`play`);
let pause = document.getElementById(`pause`);
let reset = document.getElementById(`reset`);
let intervalId;
let horas = document.getElementById(`horas`);
let minutos = document.getElementById(`minutos`);
let segundos = document.getElementById(`segundos`);

play.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("click", resetear);

function iniciar() {
    if(horas.value==0 && minutos.value==0 && segundos.value==0){
        return;
    }
    play.disabled=true;
    intervalId = window.setInterval(function () {
            segundos.value--;
            if (segundos.value == -1) {
                segundos.value = 59;
                minutos.value--;
                if (minutos.value == -1) {
                    minutos.value = 59;
                    horas.value--;
                }
            }
        
        let mostrarSegundos = segundos.value < 10 ? `0${segundos.value}` : segundos.value;
        let mostrarMinutos = minutos.value < 10 ? `0${minutos.value}` : minutos.value;
        let mostrarHoras = horas.value < 10 ? `0${horas.value}` : horas.value;
        document.getElementById("segundos").textContent = mostrarSegundos;
        document.getElementById("minutos").textContent = mostrarMinutos;
        document.getElementById("horas").textContent = mostrarHoras;
        if(horas.value==0 && minutos.value ==0 && segundos.value ==0){
        window.clearInterval(intervalId);
        }
    }, 1000);
}


function pausar() {
    window.clearInterval(intervalId);
    play.disabled=false;
}

function resetear() {
    window.clearInterval(intervalId);
    play.disabled=false;
    horas.value = `00`;
    minutos.value = `00`;
    segundos.value = `00`;
}
