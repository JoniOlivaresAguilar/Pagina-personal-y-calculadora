function calcular(){
    var val1= parseFloat(document.getElementById("V1").value)
    var val2=parseFloat(document.getElementById("V2").value)
    var x=0
    var res=document.getElementById("res")

    if(isNaN(val1) || isNaN(val2)){
        res.innerHTML="Datos nulos o incorrectos"
        if(isNaN(val1)){
            document.getElementById("V1").focus()
        }else{
            document.getElementById("V2").focus()
        }
        return
    }

    x=val1+val2

    res.innerHTML=x

}
function multiplicar(){
    var val1 = parseFloat(document.getElementById("V1").value);
    var val2 = parseFloat(document.getElementById("V2").value);
    var x=0
    var resultado = document.getElementById("res");

    if(isNaN(val1) || isNaN(val2)){
        resultado.innerHTML = "Datos nulos o incorrectos";
        if(isNaN(val1)){
            document.getElementById("V1").focus();
        }else{
            document.getElementById("V2").focus();
        }
        return;
    }
    x=val1*val2

    res.innerHTML =x
}
function restar(){
    var val1 = parseFloat(document.getElementById("V1").value);
    var val2 = parseFloat(document.getElementById("V2").value);
    var x=0
    var resultado = document.getElementById("res");

    if(isNaN(val1) || isNaN(val2)){
        resultado.innerHTML = "Datos nulos o incorrectos";
        if(isNaN(val1)){
            document.getElementById("V1").focus();
        }else{
            document.getElementById("V2").focus();
        }
        return;
    }
    x=val1-val2

    res.innerHTML =x
}
function dividir(){
    var val1 = parseFloat(document.getElementById("V1").value);
    var val2 = parseFloat(document.getElementById("V2").value);
    var x=0
    var resultado = document.getElementById("res");

    if(isNaN(val1) || isNaN(val2)){
        resultado.innerHTML = "Datos nulos o incorrectos";
        if(isNaN(val1)){
            document.getElementById("V1").focus();
        }else{
            document.getElementById("V2").focus();
        }
        return;
    }
    x=val1/val2

    res.innerHTML =x
}

