
swal({
    title: "Hola humano",
    text: "Fui diseñado para ayudarte.",
    icon: "question",
    button: "Comencemos",
    })
 
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
  Toastify({
    text: "Agregaste otro gasto",
    duration: 3000,
    position: "center",
 }).showToast()

const root = document.querySelector('#root')
console.log(root.innerHTML);

const nuevoElemento = document.createElement('li')
nuevoElemento.innerText = ' Sin vueltas'
root.append(nuevoElemento)

console.log('objetos');
const producto1 = {
    id: 1,
    titulo: 'Gastos',
    precio: 500000,
}
console.log(producto1);

function Persona(nombre, edad, pais) {
    this.name = nombre;
    this.age= edad;
    this.pais= pais;

}
const persona1 = new Persona ('Roberto', 25, 'Argentina')
const persona2= new Persona ('Marta', 18, 'Chile')
console.log(persona1);
console.log(persona2);