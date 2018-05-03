let masterMind = new MasterMind();
let currentDiv =$('#main .container').first();
window.onload = masterMind.init;
var arrayPelotas = [undefined, undefined, undefined, undefined];
let comprobarArray = function(){
    if(!arrayPelotas.includes(undefined)){
        $("#check").attr("class", "checkIN");
        $("#check").attr("style", "pointer-events: ;");
        document.getElementById("check").addEventListener('click', comprobarIntento);
       
    }else {
        if( $("#check").attr("class")=="checkIN"){
            $("#check").attr("class", "checkOUT");
            $("#check").attr("style", "pointer-events: none;");
        }
           
    }
        
}
let desactivarLinea = function(){
    var elementosDiv = Array.prototype.slice.call($('#main div:last-child'));
    elementosDiv.forEach(function(element){
        element.setAttribute("style", "pointer-events: none;");
    });
}
let ganador = function(){
    $(".close").click(function(){
        $("#info").animate({left:"+=10px"}).animate({left:"-5000px"});
    });
    $("#info").fadeOut(800).fadeIn(800).fadeOut(400).fadeIn(400)
    .fadeOut(400).fadeIn(400);
}
let reiniciarIntento = function(){

    crearLinea();
    currentDiv = $('#main .container').first();
    coincidencias = 0;
    arrayPelotas = [undefined, undefined, undefined, undefined];

    comprobarArray();
    asignarEventos();

}
let comprobarIntento = function(){
    let objetoPelotas = masterMind.comprobar(arrayPelotas);

    if(objetoPelotas.victoria)

        ganador();

    else{

        for(let i = 0; i < 4; i++){
            if(objetoPelotas.negras > 0){
                $('#main .check')[i].className = 'check negro';
                objetoPelotas.negras-= 1;
            }   
            else if(objetoPelotas.blancas > 0){
                $('#main .check')[i].className = 'check blanco';
                objetoPelotas.blancas-= 1;
            }
        }

        desactivarLinea();

        reiniciarIntento(); 
    }
}
let pintar = function(){
    
    let color =  this.className.split(" ")[1];
    let $arrayPrueba = $('#main .container:first-child .circulo');

    for(let i = 0; i<4;i++){
        
        if($arrayPrueba[i].getAttribute("name") != "coloreado"){
            $('#main .container:first-child .circulo:eq('+i+')').fadeOut();
            $arrayPrueba[i].className += " "+color;
            $arrayPrueba[i].setAttribute('name', 'coloreado');
            arrayPelotas[i] = color;
            comprobarArray();
            $('#main .container:first-child .circulo:eq('+i+')').fadeIn();  
            return 0;
        }
       
    }
   
}
let borrar = function(){
  var index = Array.from(this.parentNode.children).indexOf(this);
  arrayPelotas[index] = undefined;
  $('#main div:first-child .circulo')[index].className = "circulo";
  $('#main div:first-child .circulo')[index].setAttribute("name", "prueba");

  console.log(arrayPelotas);
  
  comprobarArray();  
  
   
}
let crearLinea = function(){
    let div = document.createElement('div');
    let dd = document.createElement('dd');
    let circulo;
    let check;

    div.setAttribute("class", "container");
   

    
    for(let i = 0; i<4;i++){
        circulo = document.createElement('div');
        circulo.setAttribute("class", "circulo");
        circulo.setAttribute("name", "prueba");
        div.appendChild(circulo);
    }
    div.appendChild(dd);
    for(let i = 0; i<4;i++){
        check = document.createElement('div');
        check.setAttribute("class", "check gris");
        div.appendChild(check);
    } 
    $("#main").prepend(div);

}

let asignarEventos = function(){
    $('[name=prueba]').on('click', borrar);
    
}
$('[name=menu]').on('click', pintar);







    
