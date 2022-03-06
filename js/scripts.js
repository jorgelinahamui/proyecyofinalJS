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

        
        let gastos = parseInt(comida) + parseInt(transporte) + parseInt(ocio)

        let balance = presupuesto - gastos
        console.log(mes, presupuesto, balance)
        

    }
    function UI() {
        let result = document.getElementById('result')
        let dataprint = document.createElement('div')

        dataprint.innerHTML = '
        <div class="container-data" row> 
        <div class="col s4">
            <h6>${mes}</h6>
            

        </div>
        </div>'
    }