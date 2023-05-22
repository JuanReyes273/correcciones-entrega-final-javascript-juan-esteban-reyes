const pintarServicios = async () => {
  const data = await getServicios()
  const contenedor = document.getElementById("servicios-contenedor")

  data.forEach(servicio => {
    const div = document.createElement("div")
    div.className = "tarjetas"
    div.innerHTML = `
              <div id="producto-contenedor">
                <div><img src="${servicio.img}"></div>
                <h3>${servicio.nombre}</h3>
                <p>${servicio.descripcion}</p>
                <a id="${servicio.id}" class="agregar" href="#">
                  <img id="${servicio.id}" class="agregar" src="${servicio.imgCarrito}" alt="">
                </a>
                <p>${servicio.precioP}</p>
              </div>
    `
    contenedor.appendChild(div);
  });
};

