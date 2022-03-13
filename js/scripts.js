console.log('Te voy a ayudar a calcular tu presupuesto')

let mesCalc = document.getElementById('mesCalc')
    mesCalc.addEventListener('submit', calcular)

    function calcular(e) {
        
        e.preventDefault()

        let mes = document.getElementById('mes').value;
        let presupuesto = document.getElementById('presupuesto').value;
        let comida = document.getElementById('comida').value;
        let transporte = document.getElementById('transporte').value;
        let ocio = document.getElementById('ocio').value;
        let otros = document.getElementById('otros').value;

        
        let gastos = parseInt(comida) + parseInt(transporte) + parseInt(ocio) + parseInt(otros)

        let balance = presupuesto - gastos
        console.log("Fecha: "+mes+" Presupuesto: "+ presupuesto+" Balance: "+ balance)
        

    }
    function UI() {
        let result = document.getElementById('result')
        let dataprint = document.createElement('div')

    }

//*Eventos

  //  console.log('Evento');
  //  const btn = document.getElementById("btnSecundario")
    
  //  btn.addEventListener("click", respuestaClick);
  //  function respuestaClick() {
  //      console.log('Agregaste un adicional')  
  //      console.log( inp.value); 
  //  }
  let btn = 
  document.getElementById("btnSecundario")
  btn = () => {console.log("Agregaste un adicional");}


const root = document.querySelector('#root')
console.log(root.innerHTML);

const nuevoElemento = document.createElement('li')
nuevoElemento.innerText = ' Sin vueltas'
root.append(nuevoElemento)
