class Productos {
    constructor(id, nombre, precio, stock, vencimiento, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vencimiento = vencimiento;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

/**
 * Definiciones de constantes
 */
// const estandarDolaresAmericanos = Intl.NumberFormat('en-US');

//Arrays donde guardaremos catálogo de productos y elementos en carrito
const productos = [];
let elementosCarrito = [];

let cargaInicialCarrito=[];
const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

/**
 * Ejecución de funciones listado de productos y carrito
 */
vaciar();
cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();

/**
 * Definiciones de funciones
 */

function cargarProductos() {
    fetch("./js/productos.json")
    .then(response=>response.json())
    .then( data => {
        data.forEach(baseproducto => {
        productos.push (new Productos(baseproducto.id, baseproducto.nombre,baseproducto.precio,baseproducto.stock,baseproducto.vencimiento,baseproducto.imagen));
    });
    });

    productos.push (new Productos(1,'Ravioles',  1200,  10,  '12/10/2022', './imagenes/catalogoRavioles.jpg'));
    productos.push (new Productos(2,'Agnolotis', 1800,  20, '12/12/2022', './imagenes/catalogoAgnolotis.jpg'));
    productos.push (new Productos(3,'Tallarines',  900,  14,  '21/11/2022', './imagenes/catalogoTallarines.jpg'));
    productos.push (new Productos(4,'Ñoquis', 750,  30,  '08/12/2022', './imagenes/catalogoNioquis.jpg'));
    productos.push (new Productos(5,'Sorrentinos',  1400,  8, '12/09/2022', './imagenes/catalogoSorrentinos.jpg'));
    productos.push (new Productos(6,'Tirabuzón',  800,  14,  '11/0/2022', './imagenes/catalogoTirabuzon.jpg'));
    productos.push (new Productos(7,'Ñoquis a la Romana',  900,  14,  '15/10/2022', './imagenes/catalogoNioquisSemola.jpg'));
    productos.push (new Productos(8,'Lasagna',  2100,  14,  '15/12/2022', './imagenes/catalogoLasagna.jpg')); 
}

function cargarCarrito() {
/*     if (localStorage.length>0){
        for (let index = 0; index < localStorage.length; index++) {
            cargaInicialCarrito[index] = JSON.parse(localStorage.getItem(`carrito${index}`));
            //elementosCarrito.push(cargaInicialCarrito);
        }
        console.log(cargaInicialCarrito);
    } */
    if (localStorage.length > 0) {
        elementosCarrito = JSON.parse(localStorage.getItem("carrito"));
        console.log(elementosCarrito);
    }
}
function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            let importeProducto = parseInt(elemento.cantidad)*parseInt(elemento.producto.precio);
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="100" step="1" style="width: 50px;"/></td>
                <td> $ ${importeProducto}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

//Agregar evento a input de renglón en carrito
            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            inputCantidadProducto.addEventListener('change', (ev) => {
                let nuevaCantidad = ev.target.value;
                elemento.cantidad = nuevaCantidad;

                dibujarCarrito();
            });

//Agregar evento a eliminar producto
            let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
            botonEliminarProducto.addEventListener('click', () => {
            let indiceEliminar =  elementosCarrito.indexOf(elemento);
            elementosCarrito.splice(indiceEliminar,1);
                
            dibujarCarrito();
            });


        }
    );

    const valorInicial = 0;
    const totalCompra = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad,
        valorInicial
    );

    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">~ Pedido vacío ~</th>`;
    } else {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Total de la compra: $ ${totalCompra}</th>`;
    }

}

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
}

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";
    
    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio}</p>
    `;

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem";

    //Contenedor Card
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";

    contenedorCarta.append(carta);
    carta.append(imagen);
    carta.append(cuerpoCarta);
    cuerpoCarta.append(botonAgregar);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {
        let elementoExistente = 
            elementosCarrito.find((elem) => elem.producto.id == producto.id);

        if(elementoExistente) {
            elementoExistente.cantidad+=1;
            
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
            
        }

        // Guardamos el Carrito en el LocalStorage
        localStorage.setItem(`carrito`,JSON.stringify(elementosCarrito));
        dibujarCarrito();
        
        swal({
            title: '¡Producto agregado!',
            text: `Se agregó ${producto.nombre} al carrito`,
            icon: 'success',
            buttons: {
                cerrar: {
                    text: "Cerrar",
                    value: false
                },
                carrito: {
                    text: "Ir a carrito",
                    value: true
                }
            }

        }).then((decision) => {
            if(decision) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('toggleMyModal'); 
                myModal.show(modalToggle);
            } 
        });
    }
    
    return carta;

}

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );

}

function vaciar() {
    localStorage.clear();   // vacio localStorage
    elementosCarrito = [];  //vacio array
    dibujarCarrito();       //vacio DOM del HTML

}

