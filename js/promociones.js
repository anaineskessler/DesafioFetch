let fecha = new Date();
let haypromo =0;
let diasemana= fecha.getDay();

switch (diasemana) {
    case 1:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Lunes son: </h3>";
        promocionValida.append(haypromo);
        break;
    case 2:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Martes son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 3:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Miércoles son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 4:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Jueves son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 5:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Viernes son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 6:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Sábado son: </h3>";
        promocionValida.append(haypromo);
        break;    
    case 0:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Domingo son: </h3>";
        promocionValida.append(haypromo);
        break;                                    
    default:
        break;
}

const cardContainerHTML = document.getElementById('cardContainer')

// FETCH 
const prodPromo = "./js/productos.json";

// Armado de Productos, indicando según el día de la semana si está en promo o no

fetch(prodPromo)
	.then((res) => res.json())
	.then((data) => {
    let characters = ""
        console.log(data)
		data.forEach((i)=>{
            characters += `
            <div class="card elemento m-2" style="width: 18rem;">
                <img src="${i.imagen}" class="card-img-top" alt="image">
                <div class="card-body">
                <h3 class="card-title">${i.nombre}</h3>
                <p class="card-text">Precio: $ ${i.precio}</p>
                <h3 class=${i.promo === diasemana ? 'green' : 'red'}> ${i.promo === diasemana ? 'En Promoción' : 'No está en Promoción'}</h3> 
                </div>
                </div>`
                cardContainerHTML.innerHTML = characters;
        })
	})
	.catch((e) => console.log(e))
