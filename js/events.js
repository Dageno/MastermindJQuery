let masterMind = new MasterMind();

window.onload = masterMind.init;

var arrayPelotas = [undefined, undefined, undefined, undefined];
let comprobarArray = function(){
    if(!arrayPelotas.includes(undefined)){
        $("#check").attr("class", "checkIN");
        $("#check").attr("style", "pointer-events: ;");
        document.getElementById("check").addEventListener('click', masterMind.comprobar);
       
    }else {
        if( $("#check").attr("class")=="checkIN"){
            $("#check").attr("class", "checkOUT");
            $("#check").attr("style", "pointer-events: none;");
        }
           
    }
        
}
let pintar = function(){
    
    let color =  this.className.split(" ")[1];
    let $arrayPrueba = $('#main .container:last-child .circulo');

    for(let i = 0; i<4;i++){
        if($arrayPrueba[i].getAttribute("name") != "coloreado"){
            $arrayPrueba[i].className += " "+color;
            $arrayPrueba[i].setAttribute('name', 'coloreado');
            arrayPelotas[i] = color;
            comprobarArray();   
            return 0;
        }
    }
   
}
let borrar = function(){
  var index = Array.from(this.parentNode.children).indexOf(this);
  arrayPelotas[this.index] = undefined;
  $('#main div:last-child .circulo')[index].className = "circulo";
  $('#main div:last-child .circulo')[index].setAttribute("name", "prueba");

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
    $('#main').append(div);

}

let asignarEventos = function(){
    $('[name=prueba]').on('click', borrar);
    
}
$('[name=menu]').on('click', pintar);







    
