const openModal = document.querySelector('.carrito');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("eliminar-servicio-carrito")) {
        eliminarServicioCarrito(e.target.value)
    }
})

closeModal.addEventListener('click', (e)=> {
    Swal.fire({
        icon: "success",
        title: "Compra Exitosa",
        text: "Gracias por tu compra!"
    })
});