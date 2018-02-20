
     let $currentDiv = $('#main').last();

    let MasterMind = function(){

        let colores = ["negro", "azul", "verde", "amarillo", "rojo", "naranja", "blanco", "marron"];
        let arrSolucion = new Array();
       
        var $element = $('.container')[0];
        var nuevo = $element.cloneNode(true);
        
        

        let numeroAleatorio = () => {
            return Math.floor(Math.random()*colores.length);
        }

        let init = function(){
            
            for(let i = 0; i<4;i++)
                arrSolucion.push(colores[numeroAleatorio()])
            asignarEventos();
            console.log(arrSolucion);
           
            
        }
    
        let comprobarCoincidencia = function (){
           
            let arrayD = $('#main div:last-child .circulo');
            let array = [];
            let negros = 0;
            for(let i = 0; i<arrayD.length;i++){
                array[i] = arrayD[i].className.split(" ")[1];    
            }
            
            let coincidencias = 0;
            for(let i = 0; i < 4; i++){
                if(arrSolucion[i]===array[i]){
                    
                    $('#main div:last-child .check')[coincidencias].className = "check negro";
                   
                    negros++;
                    coincidencias++;
                }
                    
            }
            if(coincidencias != 4){
                array.forEach(function(elemento, index){
                    if(arrSolucion.indexOf(elemento) >=0 && index != arrSolucion.indexOf(elemento)){
                        $('#main div:last-child .check')[coincidencias].className = "check blanco";
                        coincidencias++;
                    }
                
                });

                var elementosDiv = Array.prototype.slice.call($('#main div:last-child'));
                elementosDiv.forEach(function(element){
                    element.setAttribute("style", "pointer-events: none;");
                })

                crearLinea();
                scrollTo(0, window.outerHeight);
                $currentDiv = $('#main').last();
                coincidencias = 0;
                arrayPelotas = [undefined, undefined, undefined, undefined];
                comprobarArray();
                asignarEventos();
            }else{

                var elementosDiv = Array.prototype.slice.call($('#main div:last-child'));
                elementosDiv.forEach(function(element){
                    element.setAttribute("style", "pointer-events: none;");
                })
                
                $(".close").click(function(){
                    $("#info").animate({left:"+=10px"}).animate({left:"-5000px"});
                });
                $("#info").fadeOut(800).fadeIn(800).fadeOut(400).fadeIn(400)
                .fadeOut(400).fadeIn(400);

            }
            
                
            
        
            
        }
        

        return{
            init: init,
            comprobar: comprobarCoincidencia
        }

    }

    
