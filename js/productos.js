class Productos {
    constructor(nombre, precio, stock, vencimiento) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vencimiento = vencimiento;
    }
}
let catalogoStorage = [];
//localStorage.clear();   // vacio localStorage

// Inicialización de Variables
/* function productosBase() {
    let listaproductos = [];
    listaproductos.push (new Productos('ravioles',  1200,  10,  '12/05/2022'));
    listaproductos.push (new Productos('agnolotis', 1800,  20, '12/05/2022'));
    listaproductos.push (new Productos('fideos',  900,  14,  '11/05/2022'));
    listaproductos.push (new Productos('ñoquis', 800,  30,  '11/05/2022'));
    listaproductos.push (new Productos('sorrentinos',  1400,  8, '12/05/2022'));
} */

cargarCatalogo();

function agregarProducto(nomb,prec,st,vto) {
    catalogoStorage.push({nombre: nomb, precio: prec, stock: st, vencimiento: vto});
    localStorage.setItem("catalogo",JSON.stringify(catalogoStorage));
}

function buscoProducto(prod, listaproductos){
    codProd = catalogoStorage.find(item => item.nombre.toUpperCase() === prod.toUpperCase());
    return codProd;
}

function borroProd(){
    catalogoStorage.splice(ubicacion,1);
    localStorage.setItem("catalogo",JSON.stringify(catalogoStorage));
    Swal.fire(
        'Se eliminó el Producto',
        '',
        'success'
    )
}

function borrarProducto(producto,catalogoStorage){
    elementobuscado = buscoProducto(producto.nombre,catalogoStorage);
    ubicacion = catalogoStorage.indexOf(elementobuscado);
    preguntaEliminarProd(ubicacion);
}

function msnProdNoExiste() {
    Swal.fire(
        'Ese producto NO existe',
        '',
        'error'
    )
}

function bajaProducto(){
    Swal.fire({        
        title:'Producto a Eliminar',
        input: "text",
        inputPlaceholder: 'Escriba el nombre',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        footer:'La Cucina de Anush',
    })
    .then(resultado => {
        if (resultado.value) {
            let producto = resultado.value;
            let estaProducto= buscoProducto(producto,catalogoStorage);
            (estaProducto === undefined) ? msnProdNoExiste() : borrarProducto(estaProducto,catalogoStorage);
        }
    });
}

function altaProducto() {
    Swal.fire({        
        title:'Producto a Ingresar',
        input: "text",
        inputPlaceholder: 'Escriba el nombre',
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
        footer:'La Cucina de Anush',
    }).then(resultado => {
        if (resultado.value) {
            let producto = resultado.value;
            let estaProducto = buscoProducto(producto,catalogoStorage);
            if (estaProducto === undefined) {
                Swal.fire ({
                    title: `Producto nuevo: ${producto}`,
                    html: '<form id="formularioIngreso">'+
                    '<label>Ingrese el precio: $</label>'+
                    '<input required="" class="form-control col-sm-7" id="prec" type="numbre" autofocus style="color: #2e7d32;">'+
                    '<label>Ingrese el stock: </label>'+
                    '<input required="" class="form-control col-sm-7" id="st" type="numbre" autofocus style="color: #2e7d32;">'+
                    '<label>Ingrese la fecha de Vencimiento: </label>'+
                    '<input required="" class="form-control col-sm-7" id="vto" type="date" autofocus style="color: #2e7d32;">'+
                    '</form>',
                }).then((result) => {
                    if (result.isConfirmed) {
                    confirma="S";
                    console.log("paso");
                    let prec=document.getElementById("prec").value;
                    let st=document.getElementById("st").value;
                    let vto=document.getElementById("vto").value;
                    console.log(producto,prec,st,vto);
                    agregarProducto(producto,prec,st,vto);
                    Swal.fire(
                        'ACTUALIZACIÓN',
                        'El Producto fue agregado exitosamente!',
                        'success'
                    );
                    }
                })
            } else {
                Swal.fire(
                    'Ese producto YA existe',
                    '',
                    'warning'
                )
            }
        }
    });
}

function miroProductos(){
    cargarCatalogo();
    let listadocompletoProductos = document.createElement("div");
    console.log("miroproductos");
    console.log(catalogoStorage);
    for (const producto of catalogoStorage) {
        let item = document.createElement("div");
        item.innerHTML = `<h3 class="color_marron_sm">Producto: ${producto.nombre} </h3> 
        <p>Precio: $ ${producto.precio}</p>
        <p>Stock: ${producto.stock} unidades</p> 
        <p>Fecha Vencimiento: ${producto.vencimiento}</p>
        <br>
        <hr>`;
        listadoCompletoProductos.append(item);
    }
}

function preguntaEliminarProd(ubicacion) {
    Swal.fire({
        title: 'Eliminación',
        text: "Está seguro que quiere eliminarlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff8000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo'
    }).then((result) => {
        if (result.isConfirmed) {
        confirma="S";
        borroProd(ubicacion);
        miroProductos();
        Swal.fire(
            'Borrado',
            'El Producto fue eliminado',
            'success'
        )
        }
    })
}

function cargarCatalogo() {
    console.log("ENTRE A CARGAR");
    if (localStorage.length > 0) {
        catalogoStorage=JSON.parse(localStorage.getItem("catalogo"));


        // renderizar innerhtml  foreach!!!!!!!!!!!!!!!!   para que se generere denuevo el carrito y el catalogo
 

        //listaproductos=catalogoStorage;
        console.log("cargaCatalogoStorage");
        console.log(catalogoStorage);
    } else {
        //productosBase();
        catalogoStorage.push (new Productos('ravioles',  1200,  10,  '12/05/2022'));
        catalogoStorage.push (new Productos('agnolotis', 1800,  20, '12/05/2022'));
        catalogoStorage.push (new Productos('fideos',  900,  14,  '11/05/2022'));
        catalogoStorage.push (new Productos('ñoquis', 800,  30,  '11/05/2022'));
        catalogoStorage.push (new Productos('sorrentinos',  1400,  8, '12/05/2022'));
        localStorage.setItem("catalogo",JSON.stringify(catalogoStorage));
        catalogoStorage=JSON.parse(localStorage.getItem("catalogo"));
        console.log("cargaCatalogoLocal");
        //console.log(listaproductos);
        console.log(catalogoStorage);
    }
}