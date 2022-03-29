console.log('sweet alert');


const boton = document.getElementById('bntEvento')

boton.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Los datos han sido guardados',
        showConfirmButton: true,
        timer: 1500
    })
})