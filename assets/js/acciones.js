console.log("Hola Mundo desde archivo acciones JS");

function operatoria (numero1, numero2, operador){
    let numero1int, numero2int;
    numero1int = parseInt(numero1);
    numero2int = parseInt(numero2);

    switch (operador){
        case "1":
            resultado = numero1int + numero2int;
            break;
        case "2":
            resultado = numero1int - numero2int;
            break;
        case "3":
            resultado = numero1int * numero2int;
            break;
        case "4":
            resultado = numero1int / numero2int;
            break;
        default:
            resultado = "opcion invalida"
    }
    return resultado;
};

function mayorque (numero1, numero2){
    let numero1int, numero2int;
    numero1int = parseInt(numero1);
    numero2int = parseInt(numero2);

    if (numero1int < numero2int) {
        resultado = "El numero "+numero2+" es mayor que "+numero1;
    } else {
        resultado = "El numero "+numero1+" es mayor que "+numero2;
    }
    
    return resultado;
}

function boletas (){
    let opcionbol, validabol;

    do{

        opcionbol = prompt("Seleccione una opcion:\n1.- Ver Boleta\n2.- Pagar Cuenta"); 

        switch (opcionbol){
            case "1":
                alert("Haga click aqui para descargar su boleta");
                validabol="ok"
                break;
            case "2":
                alert("Esta siendo transferido. Espere Por favor");
                validabol="ok"
                break;
            default:
                alert("La opcion ingresada no es valida, intente nuevamente");
                validabol=":$"
        }

    } while (validabol == ":$");
    
    return(null);
}

function senalYllamadas (){
    let opcionsyl, mens_cliente, validasyl;

    do{
        opcionsyl = prompt("Seleccione una opcion:\n1.- Problemas con la Señal\n2.- Problemas con las llamadas");

        if (opcionsyl == "1" || opcionsyl == "2"){
            mens_cliente = prompt("A continuacion escriba su solicitud");
            alert("Estimado Usuario, su solicitud: "+mens_cliente+" Ha sido ingresada con exito. \nPronto sera contactado por uno de nuestros ejecutivos");
            validasyl = "s"
        } else {
            alert("La opcion ingresada no es valida, intente nuevamente");
            validasyl = "n"
        };

    } while (validasyl =="n");
    
    
    return(null);
}

function ofertasComerciales(){
    let opcionoc, validaoc;
    do{

        opcionoc= prompt("Mentel tiene una oferta comercial acorde a tus necesidades. \nPara conocer mas informacion y ser asesorado personalmente por un ejecutivo, escribe SI y un ejecutivo te llamara. De lo contrario escribe NO");

        opcionoc = opcionoc.toUpperCase();

        switch (opcionoc){
            case "SI":
                alert("Un ejecutivo contactara con usted");
                validaoc="ok";
                break;
            case "NO":
                alert("Gracias por preferir nuestros servicios");
                validaoc="ok";
                break;
            default:
                alert("La opcion ingresada no es valida, intente nuevamente");
                validaoc = "eehh";
        }
    } while (validaoc == "eehh");
    return(null);
    
}

function otrasConsultas() {
    let mens_oc;
    mens_oc=prompt("A continuacion escriba su consulta");
    alert("Estimado usuario, su consulta: "+mens_oc+" ha sido ingresado con exito. Pronto sera contactado por uno de nuestros ejecutivos");
    return(null);   
}