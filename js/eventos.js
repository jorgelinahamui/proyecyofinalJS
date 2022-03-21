console.log('eventos');

const boton = document.getElementById('boton')
boton.addEventListener('click', () => { 
    const input = document.getElementsByName('entrada')
    const nombreProducto = input.value

    const root = document.getElementById('root')
    const nuevoProducto = document.createElement('li')
    nuevoProducto.innerText = nombreProducto
    root.appendChild (nuevoProducto)
})

// console.log(DOM2)EN SCRIPTS;

// const elemento = [ 
   // { id: 1, titulo}
 //] 

 console.log('Evento');
 const btn = document.querySelector('#boton')
 
 btn.addEventListener('click', onClickHandler)
 function onClickHandler() {
     console.log('Hiciste click en el boton')  
     console.log( inp.value); 
 }
 
 const inp = document.getElementById('entrada')
 inp.oninput = () => {console.log('Hubo cambio');
 }


 