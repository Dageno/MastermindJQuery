    let MasterMind = function(){

        let colores = ["negro", "azul", "verde", "amarillo", "rojo", "naranja", "blanco", "marron"];
        let arrSolucion = new Array();
        let arrCopia = new Array();
        
        

        let numeroAleatorio = () => {
            return Math.floor(Math.random()*colores.length);
        }

        let init = function(){
            
            for(let i = 0; i<4;i++)
                arrSolucion.push(colores[numeroAleatorio()])
            asignarEventos();
            arrCopia = arrSolucion.slice();
            console.log(arrSolucion);
           
            
        }
    
        let comprobarCoincidencia = function (array){
           
            let pelotasCheck;
            let negros = 0;
            let blancos = 0;
            let coincidencias = 0;
            arrCopia = arrSolucion.slice();

            for(let i = 0; i < 4; i++){
                if(arrCopia[i]===array[i]){
                    
                    arrCopia[i] = undefined;
                    array[i] = undefined;
                    negros++;
                    coincidencias++;
                }
                    
            }

            if(negros === 4)
                return pelotasCheck = {
                    negras: negros,
                    blancas: blancos,
                    victoria: true

                }

            
                array.forEach(function(elemento, index){
                    if(arrCopia.indexOf(elemento) >=0 && index != arrCopia.indexOf(elemento)){
                        arrCopia[arrCopia.indexOf(elemento)] = undefined;
                        coincidencias++;
                        blancos++;
                    }
                
                });

                return pelotasCheck = {
                    negras: negros,
                    blancas: blancos,
                    victoria: false
    
                }
                
            
        }
        

        return{
            init: init,
            comprobar: comprobarCoincidencia
        }

    }
