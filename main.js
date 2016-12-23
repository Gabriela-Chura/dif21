function calcular() {
    var num = document.getElementById("num");
    var num21 = document.getElementById("num21");
    var salida = document.getElementById("salida");
    var res;

    var varnum = num.value;
    var varnum21 = num.value;


    if (varnum == "") {
        salida.innerHTML = "Necesitas un numero";
       
    } else {

        if (varnum < 21) {
            varnum21 = 21;
            res = varnum21 - varnum;
            
            salida.innerHTML =  res;
        } else if (varnum == 21) {
            varnum21 = 21;
            res = varnum21 - varnum;
            
            salida.innerHTML = res;
        } else {
            varnum21 = 21;
            res = (varnum - 21) * 2;
           
            salida.innerHTML = res;
        }
    }
}