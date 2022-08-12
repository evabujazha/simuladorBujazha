const fila1 = document.querySelector("#fila1");

fetch("../json/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((productos) => {
      const prod = document.createElement(`div`);
      prod.classList.add(
        "col-12",
        "col-sm-12",
        "col-md-4",
        "col-lg-4",
        "col-xl-4"
      );
      prod.innerHTML = `
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${productos.producto}</h4>
            </div>
            <div class="card-body">
                <img src="${productos.img}" class="img-thumbnail" alt="${productos.nombre}">
                <ul class="list-unstyled mt-3 mb-4">
                    <li>${productos.kcals} kcals</li>
                    <li>Proteinas: ${productos.protes}</li>
                    <li>Carbohidratos: ${productos.carbs}</li>
                    <li>Grasas totales: ${productos.grasas}</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary" id="${productos.id}">$${productos.precio}</button>
            </div>
        </div>
        `;

      fila1.append(prod);
    });
  });
